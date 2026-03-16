import { GetResponseResponse, ActionConfig } from "../../Proto/service/service_pb";
export declare class ConvaiGRPCClient {
    private client;
    private feedbackClient;
    private apiKey;
    private languageCode;
    private sessionId;
    private characterId;
    private speaker;
    private inputMode;
    private isStarted;
    private speakerId;
    private finishedSending;
    private enableAudio;
    private audioSampleRate;
    private actionConfigParams;
    constructor(apiKey: string, characterId: string, speaker: string, speakerId: string, sessionId: string, responseCallback: (response: GetResponseResponse) => void, errorCallback: (type: string, statusMessage: string, status: string) => void, languageCode: string, enableAudio: boolean, audioSampleRate?: number, webstreamUrl?: string);
    close(): void;
    invokeTrigger(name: string, message?: string): void;
    sendFeedback(interaction_id: string, character_id: string, session_id: string, thumbs_up: boolean, feedback_text: string): void;
    sendText(text: string): void;
    sendAudioChunk(chunk: ArrayBuffer): void;
    finishSend(): void;
    private sendFirstRequest;
    setActionConfig(actionConfig: ActionConfig): void;
    private start;
}
