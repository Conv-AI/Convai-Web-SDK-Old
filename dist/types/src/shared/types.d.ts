import { ActionConfig } from "../../Proto";
export interface ChatMessage {
    id?: string;
    sender: "user" | "npc";
    content: string;
    timestamp?: number;
}
export type ActionConfigParamsType = {
    actions?: string[];
    characters?: ActionConfig.Character[];
    objects?: ActionConfig.Object[];
    classification?: string;
    contextLevel?: number;
    currentAttentionObject?: string;
};
export interface UseConvaiClientState {
    npcText: string;
    chatbotMic: boolean;
    isTyping: boolean;
    isTalking: boolean;
    isStreaming: boolean;
    chatMessages: ChatMessage[];
    npcName: string;
    userName?: string;
    emotionData: string[];
    gender: string;
    actionList: string[];
    currTranscript: string;
    tempTranscript: string;
    transcript: string;
}
export interface UseConvaiClientActions {
    setNpcText: (value: string) => void;
    setIsTyping: (value: boolean) => void;
    setChatbotMic: (value: boolean) => void;
    handleKeyUp: () => void;
    handleTextStream: (text?: string) => Promise<void> | void;
    handleTranscriptChange: (e: any) => void;
    startListening: () => Promise<void> | void;
    stopListening: () => Promise<void> | void;
    resetChatHistory: () => void;
    invokeTrigger: (name: string, message?: string) => void;
    sendFeedback: (interaction_id: string, character_id: string, session_id: string, thumbs_up: boolean, feedback_text: string) => void;
    toggleAudioVolume: () => void;
    getAudioVolume: () => number | undefined;
    stopCharacterAudio: () => void;
    pauseAudio: () => void;
    resumeAudio: () => void;
    onAudioStateChange: (fn: () => void) => void;
    playAudio: () => void;
    setActionConfig: (actionConfig: ActionConfig) => void;
}
export interface UseConvaiClientRefs {
    convaiClient: React.MutableRefObject<ConvaiClientInterface | null>;
    responseText: React.MutableRefObject<string>;
    newMessages: React.MutableRefObject<any[]>;
    facialRef: React.MutableRefObject<any[]>;
}
export interface UseConvaiClientReturn {
    state: UseConvaiClientState;
    actions: UseConvaiClientActions;
    refs: UseConvaiClientRefs;
    characterId: string;
}
export interface ConvaiClientParams {
    apiKey: string;
    characterId: string;
    speaker?: string;
    speakerId?: string;
    enableAudio?: boolean;
    sessionId?: string;
    enableFacialData?: boolean;
    faceModel?: 0 | 1 | 2 | 3;
    narrativeTemplateKeysMap?: Map<string, string>;
    textOnlyResponse?: boolean;
    micUsage?: boolean;
    webstreamUrl?: string;
    languageCode?: string;
    retryCount?: number;
    apiBaseUrl?: string;
}
export interface UseConvaiClientParams {
    apiKey: string;
    characterId: string;
    speaker?: string;
    enableAudio?: boolean;
    speakerId?: string;
    sessionId?: string;
    languageCode?: string;
    enableFacialData?: boolean;
    faceModel?: 0 | 1 | 2 | 3;
    narrativeTemplateKeysMap?: Map<string, string>;
    textOnlyResponse?: boolean;
    micUsage?: boolean;
    webstreamUrl?: string;
    apiBaseUrl?: string;
    retryCount?: number;
}
export interface ConvaiClientInterface {
    sendTextChunk(text: string): void;
    sendTextStream(text: string, isTyping?: boolean): void;
    connectionState(text: string): void;
    resetSession(): void;
    invokeTrigger(name: string, message?: string): void;
    sendFeedback(interaction_id: string, character_id: string, session_id: string, thumbs_up: boolean, feedback_text: string): void;
    toggleAudioVolume(): void;
    getAudioVolume(): number | undefined;
    stopCharacterAudio(): void;
    pauseAudio(): void;
    resumeAudio(): void;
    onAudioPlay(fn: () => void): void;
    onAudioStop(fn: () => void): void;
    onAudioStateChange(fn: () => void): void;
    playAudio(): void;
    setActionConfig(actionConfig: ActionConfig): void;
    startAudioChunk(): void;
    endAudioChunk(): void;
    setResponseCallback(fn: (response: any) => void): void;
    setErrorCallback(fn: (type: string, statusMessage: string, status: string) => void): void;
}
