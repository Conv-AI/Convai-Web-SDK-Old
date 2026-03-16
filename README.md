# Convai Web SDK

TypeScript/JavaScript SDK for integrating Convai's conversational AI into web apps. React-first, with vanilla support.

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
    // speaker: "User",              // display name; if provided, SDK will create/get speakerId
    // speakerId: "device-uuid",     // device-bound id; idempotent speaker creation
    // enableAudio: true,
    // languageCode: "en-US",
    // apiBaseUrl: "https://your-onprem-api",   // REST (character/speaker) base
    // webstreamUrl: "wss://your-webstream",    // gRPC websocket host
  });

  return <YourUI client={client} />;
}
```

Key behaviors

- If neither speaker nor speakerId is provided, defaults to speaker="User" and speakerId=apiKey.
- If speaker is provided (with or without speakerId), SDK creates/gets a speaker and uses the returned speakerId.
- If only speakerId is provided, SDK creates/gets a device-bound speaker named "User" and uses the returned speakerId.
- On API failure, SDK falls back to speaker="User" and speakerId=apiKey.

## Vanilla TypeScript

```ts
import { ConvaiClient } from "convai-web-sdk";
// If you want typing for the response:
import type { GetResponseResponse } from "convai-web-sdk";

const client = new ConvaiClient({
  apiKey: "your-api-key",
  characterId: "your-character-id",
  enableAudio: true,
  languageCode: "en-US",
  // Optional
  // speaker: "User",
  // speakerId: "device-uuid",
  // sessionId: `session-${Date.now()}`,
  // narrativeTemplateKeysMap: new Map(),
  // apiBaseUrl: "https://your-onprem-api",
  // webstreamUrl: "wss://your-webstream",
});

// Parse response parts: userQuery, audio/text, actions, emotions, BT, ids
client.setResponseCallback((resp: GetResponseResponse) => {
  // 1) User live transcript (from your mic)
  if (resp.hasUserQuery && resp.hasUserQuery()) {
    const uq = resp.getUserQuery();
    const userText = uq?.getTextData?.() || "";
    const isFinal = uq?.getIsFinal?.();
    const endOfResponse = uq?.getEndOfResponse?.();
    if (userText) {
      console.log("USER:", userText, { isFinal, endOfResponse });
    }
  }

  // 2) NPC streaming text/audio
  if (resp.hasAudioResponse && resp.hasAudioResponse()) {
    const audio = resp.getAudioResponse();
    const npcText = audio?.getTextData?.() || "";
    const endOfResponse = audio?.getEndOfResponse?.();
    if (npcText) console.log("NPC:", npcText, { endOfResponse });
  }

  // 3) Action response (string payload)
  if (resp.hasActionResponse && resp.hasActionResponse()) {
    const action = resp.getActionResponse()?.getAction?.();
    if (action) console.log("ACTION:", action);
  }

  // 4) Emotion response (string)
  if (resp.hasEmotionResponse && resp.hasEmotionResponse()) {
    console.log("EMOTION:", resp.getEmotionResponse?.());
  }

  // 5) Behavior Tree response (code/consts/section)
  if (resp.hasBtResponse && resp.hasBtResponse()) {
    const bt = resp.getBtResponse();
    console.log("BT:", {
      code: bt?.getBtCode?.(),
      constants: bt?.getBtConstants?.(),
      sectionId: bt?.getNarrativeSectionId?.(),
    });
  }
});

// Send a single text turn
client.sendTextStream("Hello there!");
// Mic flow:
// client.startAudioChunk();
// ... feed audio chunks via client.sendAudioChunk(ArrayBuffer) ...
// client.endAudioChunk();
```

## Configuration (selected)

- apiKey, characterId: required
- speaker?: string
- speakerId?: string
- enableAudio?: boolean
- sessionId?: string
- languageCode?: string
- narrativeTemplateKeysMap?: Map<string, string>
- retryCount?: number
- apiBaseUrl?: string // overrides https://api.convai.com for REST
- webstreamUrl?: string // overrides https://webstream.convai.com for gRPC

## Build

```bash
npm run build
```

Outputs

- React ESM: dist/react/esm
- Vanilla ESM: dist/vanilla/esm
- Vanilla UMD: dist/vanilla/umd
