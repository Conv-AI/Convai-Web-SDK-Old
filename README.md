## Convai Web SDK

TypeScript/JavaScript SDK for integrating Convai’s conversational AI into web apps. React-first, with vanilla support.

## Install

```bash
npm install convai-web-sdk
```

## React (recommended)

```tsx
import { useConvaiClient } from "convai-web-sdk";

export default function App() {
  const client = useConvaiClient({
    apiKey: "your-api-key",
    characterId: "your-character-id",
    // Optional overrides
    // speaker: "User",              // display name; SDK will create/get speakerId if needed
    // speakerId: "device-uuid",     // device-bound id; idempotent speaker creation
    // enableAudio: true,
    // languageCode: "en-US",
    // apiBaseUrl: "https://your-onprem-api", // REST (character/speaker) base
    // webstreamUrl: "wss://your-webstream",  // gRPC websocket host
  });

  return <YourUI client={client} />;
}
```

### Key behaviors

- If neither speaker nor speakerId is provided, defaults to speaker="User" and speakerId=apiKey.
- If speaker is provided (with or without speakerId), SDK creates/gets a speaker and uses the returned speakerId.
- If only speakerId is provided, SDK creates/gets a device-bound speaker named "User" and uses the returned speakerId.
- On API failure, SDK falls back to speaker="User" and speakerId=apiKey.

## Build a chat UI (React)

```tsx
import { useConvaiClient } from "convai-web-sdk";

export default function Chat() {
  const { state, actions } = useConvaiClient({
    apiKey: "your-api-key",
    characterId: "your-character-id",
  });

  return (
    <div>
      {/* Messages */}
      <ul>
        {state.chatMessages.map((m) => (
          <li
            key={m.id}
            style={{ textAlign: m.sender === "user" ? "right" : "left" }}
          >
            {m.content}
          </li>
        ))}
        {/* Optional live overlays (not persisted) */}
        {state.isTalking && state.npcText && <li>{state.npcText}</li>}
        {state.chatbotMic && state.currTranscript + state.tempTranscript && (
          <li style={{ textAlign: "right" }}>
            {state.currTranscript}
            {state.tempTranscript}
          </li>
        )}
      </ul>

      {/* Text input */}
      <input
        value={state.transcript}
        onChange={actions.handleTranscriptChange}
        placeholder="Type a message"
      />
      <button onClick={() => actions.handleTextStream()}>Send</button>

      {/* Mic (press and hold to talk) */}
      <button
        onMouseDown={() => actions.startListening?.()}
        onMouseUp={() => actions.stopListening?.()}
      >
        {state.chatbotMic ? "Recording..." : "Hold to Talk"}
      </button>

      {/* Utilities */}
      <button onClick={() => actions.resetChatHistory()}>Reset</button>
      <button onClick={() => actions.toggleAudioVolume()}>Mute/Unmute</button>
    </div>
  );
}
```

## Vanilla TypeScript

```ts
import { ConvaiClient, GetResponseResponse } from "convai-web-sdk/vanilla";

const client = new ConvaiClient({
  apiKey: "your-api-key",
  characterId: "your-character-id",
  enableAudio: true,
  languageCode: "en-US",
  // Optional:
  // speaker, speakerId, sessionId, narrativeTemplateKeysMap, apiBaseUrl, webstreamUrl
});

const messages: Array<{ id: string; sender: "user" | "npc"; content: string }> =
  [];

client.setResponseCallback((resp: GetResponseResponse) => {
  if (resp.hasAudioResponse && resp.hasAudioResponse()) {
    const audio = resp.getAudioResponse();
    const text = audio?.getTextData?.() || "";
    if (audio?.getEndOfResponse?.() && text.trim()) {
      messages.push({ id: crypto.randomUUID(), sender: "npc", content: text });
      render(); // your UI update
    }
  }
});

function send(text: string) {
  messages.push({ id: crypto.randomUUID(), sender: "user", content: text });
  client.sendTextChunk(text);
}

function holdToTalkStart() {
  client.startAudioChunk();
}
function holdToTalkEnd() {
  client.endAudioChunk();
}
```

## What you get from useConvaiClient

- State
  - npcText: live NPC text during TTS streaming
  - chatbotMic: mic recording active
  - isTyping: you are composing text
  - isTalking: NPC is streaming audio
  - chatMessages: finalized messages [{ id, sender: "user" | "npc", content, timestamp? }]
  - transcript, currTranscript, tempTranscript: typed input and live ASR transcript
  - npcName, userName, emotionData, gender, actionList: metadata and signals
- Actions
  - handleTextStream(text?): send typed text (or the argument) and append a user message
  - handleTranscriptChange(e): bind input value and manage START/CLOSE connection
  - startListening()/stopListening(): begin/end mic capture
  - setChatbotMic(bool), setIsTyping(bool): manual UI control
  - resetChatHistory(): clears persisted history and session for the character
  - toggleAudioVolume(), getAudioVolume(): mute/unmute and read current volume
  - stopCharacterAudio(), pauseAudio(), resumeAudio(), onAudioStateChange(fn), playAudio()
  - invokeTrigger(name, message?), sendFeedback(interactionId, characterId, sessionId, thumbsUp, text)
  - setActionConfig(config): pass action context/config (games/simulations)
- Refs
  - convaiClient: low-level client instance (for advanced control)
  - responseText, newMessages, facialRef: internal collectors/hooks
- Return
  - characterId: the active character for this client

## ConvaiClient (vanilla) — key methods

- sendTextChunk(text), sendTextStream(text, isTyping?)
- startAudioChunk(), endAudioChunk() for mic control
- connectionState("START" | "CLOSE"), resetSession()
- setResponseCallback(fn), setErrorCallback(fn)
- invokeTrigger(name, message?), sendFeedback(...)
- toggleAudioVolume(), getAudioVolume()
- stopCharacterAudio(), pauseAudio(), resumeAudio()
- onAudioPlay(fn), onAudioStop(fn), onAudioStateChange(fn)
- playAudio(), setActionConfig(actionConfig)

## Configuration (selected)

- apiKey, characterId: required
- speaker?: string
- speakerId?: string
- enableAudio?: boolean
- sessionId?: string
- languageCode?: string
- narrativeTemplateKeysMap?: Map<string, string>
- retryCount?: number
- apiBaseUrl?: string // overrides `https://api.convai.com` for REST
- webstreamUrl?: string // overrides `wss://webstream.convai.com` for gRPC

## Speaker handling

- No speaker/speakerId: defaults to speaker="User", speakerId=apiKey.
- With speaker (± speakerId): creates/gets speaker and uses returned speakerId.
- Only speakerId: creates/gets a device-bound speaker named "User".
- On REST failure: falls back to speaker="User", speakerId=apiKey.

## Build

```bash
npm run build
```

Outputs

- React ESM: `dist/react/esm`
- Vanilla ESM: `dist/vanilla/esm`
- Vanilla UMD: `dist/vanilla/umd`

## Dependencies

### Peer Dependencies

- `react` >= 16.8.0 (for React functionality)

### Dev Dependencies

- TypeScript and build tools
- Webpack for bundling
- Protocol buffer tools

## License

Apache-2.0
