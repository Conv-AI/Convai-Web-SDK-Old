import { ActionConfig } from '../../Proto/service/service_pb';
type ConvaiGRPCClientConfigType = {
    apiKey: string;
    characterId: string;
    speaker: string;
    speakerId: string;
    sessionId: string;
    errorCallback: (type: string, statusMessage: string, status: string) => void;
    responseCallback: (response: any) => void;
    languageCode: string;
    disableAudioGeneration: boolean;
    enableFacialData: boolean;
    faceModel: 0 | 1 | 2 | 3;
    narrativeTemplateKeysMap: any;
    actionConfig?: ActionConfigParamsType | null;
    webstreamUrl?: string;
};
type ActionConfigParamsType = {
    actions?: string[];
    characters?: ActionConfig.Character[];
    objects?: ActionConfig.Object[];
    classification?: string;
    contextLevel?: number;
    currentAttentionObject?: string;
};
export interface ConvaiClientState {
    userText: string;
    npcText: string;
    isTalking: boolean;
    enter: number;
    audioPlay: boolean;
    keyPressed: boolean;
    avatar: string;
    npcName: string;
    userName: string;
    facialData: any[];
    emotionData: any[];
    gender: string;
    userEndOfResponse: boolean;
    session: string;
    isTyping: boolean;
    chatbotMic: boolean;
    unrealMic: boolean;
    readOnly: boolean;
    actionList: string[];
    enableAudio: boolean;
    unrealMessages: string;
    keyPressTimeStamp?: number;
}
export interface ConvaiClientActions {
    setEnter: (value: number) => void;
    setUserText: (value: string) => void;
    setNpcText: (value: string) => void;
    setEmotionData: (value: any[]) => void;
    setUserEndOfResponse: (value: boolean) => void;
    setChatbotMic: (value: boolean) => void;
    setUnrealMic: (value: boolean) => void;
    setAudioPlay: (value: boolean) => void;
    setActionList: (value: string[]) => void;
    setEnableAudio: (value: boolean) => void;
    setUnrealMessages: (value: string) => void;
    setIsTyping: (value: boolean) => void;
    handleKeyUp: () => void;
    handleKeyDown: (keyName: string, e: KeyboardEvent) => void;
    sendMessage: (starterConversationMessage?: string) => Promise<void>;
    handleTranscriptChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    resetSession: () => void;
    startListening: () => Promise<void>;
    stopListening: () => Promise<void>;
}
export interface ConvaiClientRefs {
    convaiClient: React.MutableRefObject<any | null>;
    responseText: React.MutableRefObject<string>;
    newMessages: React.MutableRefObject<any[]>;
}
export interface UseConvaiClientReturn {
    state: ConvaiClientState;
    actions: ConvaiClientActions;
    refs: ConvaiClientRefs;
    characterId: string;
}
export interface DeviceIdComponents {
    prefix: string;
    fingerprint: string;
    port: number;
}
export type { ConvaiGRPCClientConfigType, ActionConfigParamsType };
