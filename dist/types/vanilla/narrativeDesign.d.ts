export declare const getServiceUrls: (config: {
    serviceUrls?: {
        api?: string;
    };
}) => {
    create_section_url: string;
    edit_section_url: string;
    get_section_url: string;
    list_section_url: string;
    delete_section_url: string;
    create_trigger_url: string;
    update_trigger_url: string;
    delete_trigger_url: string;
    get_trigger_url: string;
    list_triggers_url: string;
};
declare const createSection: ({ objective, sectionName, behaviorTreeCode, btConstants, apiKey, characterId, api_url, }: {
    objective: any;
    sectionName: any;
    behaviorTreeCode?: any;
    btConstants?: any;
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const editSection: ({ updatedCharacterData, sectionId, apiKey, characterId, api_url, }: {
    updatedCharacterData: any;
    sectionId: any;
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const getSection: ({ sectionId, apiKey, characterId, api_url }: {
    sectionId: any;
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const listSection: ({ apiKey, characterId, api_url }: {
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const deleteSection: ({ sectionId, apiKey, characterId, api_url, }: {
    sectionId: any;
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const createTrigger: ({ triggerName, triggerMessage, destinationSection, apiKey, characterId, api_url, }: {
    triggerName: any;
    triggerMessage: any;
    destinationSection: any;
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const updateTrigger: ({ triggerId, updatedTriggerData, apiKey, characterId, api_url, }: {
    triggerId: any;
    updatedTriggerData: any;
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const deleteTrigger: ({ triggerId, apiKey, characterId, api_url, }: {
    triggerId: any;
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const getTrigger: ({ triggerId, apiKey, characterId, api_url }: {
    triggerId: any;
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
declare const listTriggers: ({ apiKey, characterId, api_url }: {
    apiKey: any;
    characterId: any;
    api_url?: string;
}) => Promise<any>;
export { createSection, editSection, getSection, listSection, deleteSection, createTrigger, updateTrigger, deleteTrigger, getTrigger, listTriggers, };
