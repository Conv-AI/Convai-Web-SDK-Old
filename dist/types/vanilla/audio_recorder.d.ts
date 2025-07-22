export declare class AudioRecorder {
    private audioContext;
    private userMedia;
    private mediaStream;
    private workletNode;
    private audioCallback;
    private audioWorkletModule;
    constructor();
    private convertoFloat32ToInt16;
    start(audioCallback: (buffer: ArrayBuffer) => void): void;
    stop(): void;
    removeMicrophoneAccess(): void;
    getMicrophoneAccess(): void;
}
