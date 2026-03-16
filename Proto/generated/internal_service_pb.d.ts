// package: service
// file: internal_service.proto

import * as jspb from "google-protobuf";

export class SessionCacheInternal extends jspb.Message {
  getApiKey(): string;
  setApiKey(value: string): void;

  hasUserDetails(): boolean;
  clearUserDetails(): void;
  getUserDetails(): SessionCacheInternal.UserDetails | undefined;
  setUserDetails(value?: SessionCacheInternal.UserDetails): void;

  hasUsageValidator(): boolean;
  clearUsageValidator(): void;
  getUsageValidator(): SessionCacheInternal.UsageValidator | undefined;
  setUsageValidator(value?: SessionCacheInternal.UsageValidator): void;

  hasCharacterDetails(): boolean;
  clearCharacterDetails(): void;
  getCharacterDetails(): SessionCacheInternal.CharacterDetails | undefined;
  setCharacterDetails(value?: SessionCacheInternal.CharacterDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionCacheInternal.AsObject;
  static toObject(includeInstance: boolean, msg: SessionCacheInternal): SessionCacheInternal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionCacheInternal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionCacheInternal;
  static deserializeBinaryFromReader(message: SessionCacheInternal, reader: jspb.BinaryReader): SessionCacheInternal;
}

export namespace SessionCacheInternal {
  export type AsObject = {
    apiKey: string,
    userDetails?: SessionCacheInternal.UserDetails.AsObject,
    usageValidator?: SessionCacheInternal.UsageValidator.AsObject,
    characterDetails?: SessionCacheInternal.CharacterDetails.AsObject,
  }

  export class UserDetails extends jspb.Message {
    getUsername(): string;
    setUsername(value: string): void;

    getUserId(): string;
    setUserId(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getAccessControl(): string;
    setAccessControl(value: string): void;

    getOrganizationId(): string;
    setOrganizationId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDetails.AsObject;
    static toObject(includeInstance: boolean, msg: UserDetails): UserDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDetails;
    static deserializeBinaryFromReader(message: UserDetails, reader: jspb.BinaryReader): UserDetails;
  }

  export namespace UserDetails {
    export type AsObject = {
      username: string,
      userId: string,
      email: string,
      accessControl: string,
      organizationId: string,
    }
  }

  export class UsageValidator extends jspb.Message {
    getApiKey(): string;
    setApiKey(value: string): void;

    getServiceName(): string;
    setServiceName(value: string): void;

    getRequestQuota(): string;
    setRequestQuota(value: string): void;

    getTtsRequestQuota(): string;
    setTtsRequestQuota(value: string): void;

    getProvider(): string;
    setProvider(value: string): void;

    getTtsPoolName(): string;
    setTtsPoolName(value: string): void;

    getTtsPoolUsageLimits(): string;
    setTtsPoolUsageLimits(value: string): void;

    getPlanKey(): string;
    setPlanKey(value: string): void;

    getUserPlan(): string;
    setUserPlan(value: string): void;

    getThirdPartyIntegrationSettings(): string;
    setThirdPartyIntegrationSettings(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageValidator.AsObject;
    static toObject(includeInstance: boolean, msg: UsageValidator): UsageValidator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageValidator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageValidator;
    static deserializeBinaryFromReader(message: UsageValidator, reader: jspb.BinaryReader): UsageValidator;
  }

  export namespace UsageValidator {
    export type AsObject = {
      apiKey: string,
      serviceName: string,
      requestQuota: string,
      ttsRequestQuota: string,
      provider: string,
      ttsPoolName: string,
      ttsPoolUsageLimits: string,
      planKey: string,
      userPlan: string,
      thirdPartyIntegrationSettings: string,
    }
  }

  export class CharacterDetails extends jspb.Message {
    getCharacterId(): string;
    setCharacterId(value: string): void;

    getCharacterName(): string;
    setCharacterName(value: string): void;

    clearCharacterActionsList(): void;
    getCharacterActionsList(): Array<string>;
    setCharacterActionsList(value: Array<string>): void;
    addCharacterActions(value: string, index?: number): string;

    getVoiceType(): string;
    setVoiceType(value: string): void;

    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getBackstory(): string;
    setBackstory(value: string): void;

    getPersonalisedPromptConfig(): string;
    setPersonalisedPromptConfig(value: string): void;

    getBoostedWords(): string;
    setBoostedWords(value: string): void;

    getGuardrailMeta(): string;
    setGuardrailMeta(value: string): void;

    getCharacterTraits(): string;
    setCharacterTraits(value: string): void;

    getPronunciations(): string;
    setPronunciations(value: string): void;

    getStartNarrativeSectionId(): string;
    setStartNarrativeSectionId(value: string): void;

    getIsNarrativeDriven(): boolean;
    setIsNarrativeDriven(value: boolean): void;

    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): void;
    addLanguageCodes(value: string, index?: number): string;

    getMemorySettings(): string;
    setMemorySettings(value: string): void;

    getListing(): string;
    setListing(value: string): void;

    getUserId(): string;
    setUserId(value: string): void;

    getApiKey(): string;
    setApiKey(value: string): void;

    getVoiceProvider(): string;
    setVoiceProvider(value: string): void;

    getVoiceAccessibility(): string;
    setVoiceAccessibility(value: string): void;

    clearVoiceLangCodesList(): void;
    getVoiceLangCodesList(): Array<string>;
    setVoiceLangCodesList(value: Array<string>): void;
    addVoiceLangCodes(value: string, index?: number): string;

    getVoiceMetaData(): string;
    setVoiceMetaData(value: string): void;

    clearVoiceAccessUsersList(): void;
    getVoiceAccessUsersList(): Array<string>;
    setVoiceAccessUsersList(value: Array<string>): void;
    addVoiceAccessUsers(value: string, index?: number): string;

    getVoiceGender(): string;
    setVoiceGender(value: string): void;

    getCustomFeature(): string;
    setCustomFeature(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getSpeakingStyle(): string;
    setSpeakingStyle(value: string): void;

    getEmbodimentData(): string;
    setEmbodimentData(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CharacterDetails.AsObject;
    static toObject(includeInstance: boolean, msg: CharacterDetails): CharacterDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CharacterDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CharacterDetails;
    static deserializeBinaryFromReader(message: CharacterDetails, reader: jspb.BinaryReader): CharacterDetails;
  }

  export namespace CharacterDetails {
    export type AsObject = {
      characterId: string,
      characterName: string,
      characterActionsList: Array<string>,
      voiceType: string,
      languageCode: string,
      backstory: string,
      personalisedPromptConfig: string,
      boostedWords: string,
      guardrailMeta: string,
      characterTraits: string,
      pronunciations: string,
      startNarrativeSectionId: string,
      isNarrativeDriven: boolean,
      languageCodesList: Array<string>,
      memorySettings: string,
      listing: string,
      userId: string,
      apiKey: string,
      voiceProvider: string,
      voiceAccessibility: string,
      voiceLangCodesList: Array<string>,
      voiceMetaData: string,
      voiceAccessUsersList: Array<string>,
      voiceGender: string,
      customFeature: string,
      description: string,
      speakingStyle: string,
      embodimentData: string,
    }
  }
}

