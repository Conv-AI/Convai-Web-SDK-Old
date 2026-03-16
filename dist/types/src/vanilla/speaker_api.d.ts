type ListSpeakersResponse = {
    STATUS?: string;
    speakers?: Array<{
        speaker_id: string;
        name: string;
        device_id?: string;
    }>;
};
export declare function createOrGetSpeaker(apiKey: string, name: string, deviceId?: string, apiBaseUrl?: string): Promise<{
    speakerId: string;
    name: string;
    deviceId?: string;
    created: boolean;
} | null>;
export declare function listSpeakers(apiKey: string, apiBaseUrl?: string): Promise<ListSpeakersResponse | null>;
export declare function deleteSpeaker(apiKey: string, speakerId: string, apiBaseUrl?: string): Promise<boolean>;
export {};
