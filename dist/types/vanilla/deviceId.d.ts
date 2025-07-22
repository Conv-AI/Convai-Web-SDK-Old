export declare function generateDeviceId(): string;
export declare function generateSecureDeviceId(): string;
export declare function getDeviceId(): string;
export declare function regenerateDeviceId(): string;
export declare function resetDeviceId(): void;
export declare function hasDeviceId(): boolean;
export declare function getStorageMethod(): string;
export declare function getDeviceFingerprint(): string;
export declare function isDeviceFingerprintingAvailable(): boolean;
export declare function parseDeviceId(deviceId: string): {
    prefix: string;
    fingerprint: string;
    port: number;
} | null;
