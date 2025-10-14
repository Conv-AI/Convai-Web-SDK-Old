import * as jspb from 'google-protobuf'

import * as arkit_blend_shapes_pb from './arkit_blend_shapes_pb'; // proto import: "arkit_blend_shapes.proto"


export class AudioConfig extends jspb.Message {
  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): AudioConfig;

  getDisableAudio(): boolean;
  setDisableAudio(value: boolean): AudioConfig;

  getEnableFacialData(): boolean;
  setEnableFacialData(value: boolean): AudioConfig;

  getFaceModel(): FaceModel;
  setFaceModel(value: FaceModel): AudioConfig;

  getEnableFacialEmotionData(): boolean;
  setEnableFacialEmotionData(value: boolean): AudioConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
  static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioConfig;
  static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

export namespace AudioConfig {
  export type AsObject = {
    sampleRateHertz: number,
    disableAudio: boolean,
    enableFacialData: boolean,
    faceModel: FaceModel,
    enableFacialEmotionData: boolean,
  }
}

export class TriggerConfig extends jspb.Message {
  getTriggerName(): string;
  setTriggerName(value: string): TriggerConfig;

  getTriggerMessage(): string;
  setTriggerMessage(value: string): TriggerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerConfig): TriggerConfig.AsObject;
  static serializeBinaryToWriter(message: TriggerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerConfig;
  static deserializeBinaryFromReader(message: TriggerConfig, reader: jspb.BinaryReader): TriggerConfig;
}

export namespace TriggerConfig {
  export type AsObject = {
    triggerName: string,
    triggerMessage: string,
  }
}

export class ActionConfig extends jspb.Message {
  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): ActionConfig;
  clearActionsList(): ActionConfig;
  addActions(value: string, index?: number): ActionConfig;

  getCharactersList(): Array<ActionConfig.Character>;
  setCharactersList(value: Array<ActionConfig.Character>): ActionConfig;
  clearCharactersList(): ActionConfig;
  addCharacters(value?: ActionConfig.Character, index?: number): ActionConfig.Character;

  getObjectsList(): Array<ActionConfig.Object>;
  setObjectsList(value: Array<ActionConfig.Object>): ActionConfig;
  clearObjectsList(): ActionConfig;
  addObjects(value?: ActionConfig.Object, index?: number): ActionConfig.Object;

  getClassification(): string;
  setClassification(value: string): ActionConfig;

  getContextLevel(): number;
  setContextLevel(value: number): ActionConfig;

  getCurrentAttentionObject(): string;
  setCurrentAttentionObject(value: string): ActionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ActionConfig): ActionConfig.AsObject;
  static serializeBinaryToWriter(message: ActionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionConfig;
  static deserializeBinaryFromReader(message: ActionConfig, reader: jspb.BinaryReader): ActionConfig;
}

export namespace ActionConfig {
  export type AsObject = {
    actionsList: Array<string>,
    charactersList: Array<ActionConfig.Character.AsObject>,
    objectsList: Array<ActionConfig.Object.AsObject>,
    classification: string,
    contextLevel: number,
    currentAttentionObject: string,
  }

  export class Character extends jspb.Message {
    getName(): string;
    setName(value: string): Character;

    getBio(): string;
    setBio(value: string): Character;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Character.AsObject;
    static toObject(includeInstance: boolean, msg: Character): Character.AsObject;
    static serializeBinaryToWriter(message: Character, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Character;
    static deserializeBinaryFromReader(message: Character, reader: jspb.BinaryReader): Character;
  }

  export namespace Character {
    export type AsObject = {
      name: string,
      bio: string,
    }
  }


  export class Object extends jspb.Message {
    getName(): string;
    setName(value: string): Object;

    getDescription(): string;
    setDescription(value: string): Object;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Object.AsObject;
    static toObject(includeInstance: boolean, msg: Object): Object.AsObject;
    static serializeBinaryToWriter(message: Object, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Object;
    static deserializeBinaryFromReader(message: Object, reader: jspb.BinaryReader): Object;
  }

  export namespace Object {
    export type AsObject = {
      name: string,
      description: string,
    }
  }

}

export class STTRequest extends jspb.Message {
  getAudioConfig(): AudioConfig | undefined;
  setAudioConfig(value?: AudioConfig): STTRequest;
  hasAudioConfig(): boolean;
  clearAudioConfig(): STTRequest;

  getAudioChunk(): Uint8Array | string;
  getAudioChunk_asU8(): Uint8Array;
  getAudioChunk_asB64(): string;
  setAudioChunk(value: Uint8Array | string): STTRequest;

  getRequestTypeCase(): STTRequest.RequestTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STTRequest.AsObject;
  static toObject(includeInstance: boolean, msg: STTRequest): STTRequest.AsObject;
  static serializeBinaryToWriter(message: STTRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STTRequest;
  static deserializeBinaryFromReader(message: STTRequest, reader: jspb.BinaryReader): STTRequest;
}

export namespace STTRequest {
  export type AsObject = {
    audioConfig?: AudioConfig.AsObject,
    audioChunk: Uint8Array | string,
  }

  export enum RequestTypeCase { 
    REQUEST_TYPE_NOT_SET = 0,
    AUDIO_CONFIG = 1,
    AUDIO_CHUNK = 2,
  }
}

export class STTResponse extends jspb.Message {
  getText(): string;
  setText(value: string): STTResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STTResponse.AsObject;
  static toObject(includeInstance: boolean, msg: STTResponse): STTResponse.AsObject;
  static serializeBinaryToWriter(message: STTResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STTResponse;
  static deserializeBinaryFromReader(message: STTResponse, reader: jspb.BinaryReader): STTResponse;
}

export namespace STTResponse {
  export type AsObject = {
    text: string,
  }
}

export class DynamicInfoConfig extends jspb.Message {
  getText(): string;
  setText(value: string): DynamicInfoConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicInfoConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicInfoConfig): DynamicInfoConfig.AsObject;
  static serializeBinaryToWriter(message: DynamicInfoConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicInfoConfig;
  static deserializeBinaryFromReader(message: DynamicInfoConfig, reader: jspb.BinaryReader): DynamicInfoConfig;
}

export namespace DynamicInfoConfig {
  export type AsObject = {
    text: string,
  }
}

export class VisionInput extends jspb.Message {
  getImageData(): VisionInput.ImageData | undefined;
  setImageData(value?: VisionInput.ImageData): VisionInput;
  hasImageData(): boolean;
  clearImageData(): VisionInput;

  getVideoData(): VisionInput.VideoData | undefined;
  setVideoData(value?: VisionInput.VideoData): VisionInput;
  hasVideoData(): boolean;
  clearVideoData(): VisionInput;

  getVisionDataCase(): VisionInput.VisionDataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisionInput.AsObject;
  static toObject(includeInstance: boolean, msg: VisionInput): VisionInput.AsObject;
  static serializeBinaryToWriter(message: VisionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisionInput;
  static deserializeBinaryFromReader(message: VisionInput, reader: jspb.BinaryReader): VisionInput;
}

export namespace VisionInput {
  export type AsObject = {
    imageData?: VisionInput.ImageData.AsObject,
    videoData?: VisionInput.VideoData.AsObject,
  }

  export class ImageData extends jspb.Message {
    getWidth(): number;
    setWidth(value: number): ImageData;

    getHeight(): number;
    setHeight(value: number): ImageData;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): ImageData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageData.AsObject;
    static toObject(includeInstance: boolean, msg: ImageData): ImageData.AsObject;
    static serializeBinaryToWriter(message: ImageData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageData;
    static deserializeBinaryFromReader(message: ImageData, reader: jspb.BinaryReader): ImageData;
  }

  export namespace ImageData {
    export type AsObject = {
      width: number,
      height: number,
      data: Uint8Array | string,
    }
  }


  export class VideoData extends jspb.Message {
    getFps(): number;
    setFps(value: number): VideoData;

    getWidth(): number;
    setWidth(value: number): VideoData;

    getHeight(): number;
    setHeight(value: number): VideoData;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): VideoData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoData.AsObject;
    static toObject(includeInstance: boolean, msg: VideoData): VideoData.AsObject;
    static serializeBinaryToWriter(message: VideoData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoData;
    static deserializeBinaryFromReader(message: VideoData, reader: jspb.BinaryReader): VideoData;
  }

  export namespace VideoData {
    export type AsObject = {
      fps: number,
      width: number,
      height: number,
      data: Uint8Array | string,
    }
  }


  export enum VisionDataCase { 
    VISION_DATA_NOT_SET = 0,
    IMAGE_DATA = 1,
    VIDEO_DATA = 2,
  }
}

export class GetResponseRequest extends jspb.Message {
  getGetResponseConfig(): GetResponseRequest.GetResponseConfig | undefined;
  setGetResponseConfig(value?: GetResponseRequest.GetResponseConfig): GetResponseRequest;
  hasGetResponseConfig(): boolean;
  clearGetResponseConfig(): GetResponseRequest;

  getGetResponseData(): GetResponseRequest.GetResponseData | undefined;
  setGetResponseData(value?: GetResponseRequest.GetResponseData): GetResponseRequest;
  hasGetResponseData(): boolean;
  clearGetResponseData(): GetResponseRequest;

  getRequestTypeCase(): GetResponseRequest.RequestTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseRequest): GetResponseRequest.AsObject;
  static serializeBinaryToWriter(message: GetResponseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseRequest;
  static deserializeBinaryFromReader(message: GetResponseRequest, reader: jspb.BinaryReader): GetResponseRequest;
}

export namespace GetResponseRequest {
  export type AsObject = {
    getResponseConfig?: GetResponseRequest.GetResponseConfig.AsObject,
    getResponseData?: GetResponseRequest.GetResponseData.AsObject,
  }

  export class GetResponseConfig extends jspb.Message {
    getCharacterId(): string;
    setCharacterId(value: string): GetResponseConfig;

    getApiKey(): string;
    setApiKey(value: string): GetResponseConfig;

    getSessionId(): string;
    setSessionId(value: string): GetResponseConfig;

    getAudioConfig(): AudioConfig | undefined;
    setAudioConfig(value?: AudioConfig): GetResponseConfig;
    hasAudioConfig(): boolean;
    clearAudioConfig(): GetResponseConfig;

    getActionConfig(): ActionConfig | undefined;
    setActionConfig(value?: ActionConfig): GetResponseConfig;
    hasActionConfig(): boolean;
    clearActionConfig(): GetResponseConfig;

    getSpeaker(): string;
    setSpeaker(value: string): GetResponseConfig;

    getLanguageCode(): string;
    setLanguageCode(value: string): GetResponseConfig;

    getSpeakerId(): string;
    setSpeakerId(value: string): GetResponseConfig;

    getApiAuthToken(): string;
    setApiAuthToken(value: string): GetResponseConfig;

    getNarrativeTemplateKeysMap(): jspb.Map<string, string>;
    clearNarrativeTemplateKeysMap(): GetResponseConfig;

    getDynamicInfoConfig(): DynamicInfoConfig | undefined;
    setDynamicInfoConfig(value?: DynamicInfoConfig): GetResponseConfig;
    hasDynamicInfoConfig(): boolean;
    clearDynamicInfoConfig(): GetResponseConfig;

    getVisionInput(): VisionInput | undefined;
    setVisionInput(value?: VisionInput): GetResponseConfig;
    hasVisionInput(): boolean;
    clearVisionInput(): GetResponseConfig;

    getClientUid(): string;
    setClientUid(value: string): GetResponseConfig;

    getBrowserData(): string;
    setBrowserData(value: string): GetResponseConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponseConfig.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponseConfig): GetResponseConfig.AsObject;
    static serializeBinaryToWriter(message: GetResponseConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponseConfig;
    static deserializeBinaryFromReader(message: GetResponseConfig, reader: jspb.BinaryReader): GetResponseConfig;
  }

  export namespace GetResponseConfig {
    export type AsObject = {
      characterId: string,
      apiKey: string,
      sessionId: string,
      audioConfig?: AudioConfig.AsObject,
      actionConfig?: ActionConfig.AsObject,
      speaker: string,
      languageCode: string,
      speakerId: string,
      apiAuthToken: string,
      narrativeTemplateKeysMap: Array<[string, string]>,
      dynamicInfoConfig?: DynamicInfoConfig.AsObject,
      visionInput?: VisionInput.AsObject,
      clientUid: string,
      browserData: string,
    }
  }


  export class GetResponseData extends jspb.Message {
    getAudioData(): Uint8Array | string;
    getAudioData_asU8(): Uint8Array;
    getAudioData_asB64(): string;
    setAudioData(value: Uint8Array | string): GetResponseData;

    getTextData(): string;
    setTextData(value: string): GetResponseData;

    getTriggerData(): TriggerConfig | undefined;
    setTriggerData(value?: TriggerConfig): GetResponseData;
    hasTriggerData(): boolean;
    clearTriggerData(): GetResponseData;

    getInputTypeCase(): GetResponseData.InputTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponseData.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponseData): GetResponseData.AsObject;
    static serializeBinaryToWriter(message: GetResponseData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponseData;
    static deserializeBinaryFromReader(message: GetResponseData, reader: jspb.BinaryReader): GetResponseData;
  }

  export namespace GetResponseData {
    export type AsObject = {
      audioData: Uint8Array | string,
      textData: string,
      triggerData?: TriggerConfig.AsObject,
    }

    export enum InputTypeCase { 
      INPUT_TYPE_NOT_SET = 0,
      AUDIO_DATA = 1,
      TEXT_DATA = 2,
      TRIGGER_DATA = 3,
    }
  }


  export enum RequestTypeCase { 
    REQUEST_TYPE_NOT_SET = 0,
    GET_RESPONSE_CONFIG = 1,
    GET_RESPONSE_DATA = 2,
  }
}

export class GetResponseRequestSingle extends jspb.Message {
  getResponseConfig(): GetResponseRequest | undefined;
  setResponseConfig(value?: GetResponseRequest): GetResponseRequestSingle;
  hasResponseConfig(): boolean;
  clearResponseConfig(): GetResponseRequestSingle;

  getResponseData(): GetResponseRequest | undefined;
  setResponseData(value?: GetResponseRequest): GetResponseRequestSingle;
  hasResponseData(): boolean;
  clearResponseData(): GetResponseRequestSingle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseRequestSingle.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseRequestSingle): GetResponseRequestSingle.AsObject;
  static serializeBinaryToWriter(message: GetResponseRequestSingle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseRequestSingle;
  static deserializeBinaryFromReader(message: GetResponseRequestSingle, reader: jspb.BinaryReader): GetResponseRequestSingle;
}

export namespace GetResponseRequestSingle {
  export type AsObject = {
    responseConfig?: GetResponseRequest.AsObject,
    responseData?: GetResponseRequest.AsObject,
  }
}

export class GetResponseResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): GetResponseResponse;

  getActionResponse(): GetResponseResponse.ActionResponse | undefined;
  setActionResponse(value?: GetResponseResponse.ActionResponse): GetResponseResponse;
  hasActionResponse(): boolean;
  clearActionResponse(): GetResponseResponse;

  getAudioResponse(): GetResponseResponse.AudioResponse | undefined;
  setAudioResponse(value?: GetResponseResponse.AudioResponse): GetResponseResponse;
  hasAudioResponse(): boolean;
  clearAudioResponse(): GetResponseResponse;

  getDebugLog(): string;
  setDebugLog(value: string): GetResponseResponse;

  getUserQuery(): GetResponseResponse.UserTranscript | undefined;
  setUserQuery(value?: GetResponseResponse.UserTranscript): GetResponseResponse;
  hasUserQuery(): boolean;
  clearUserQuery(): GetResponseResponse;

  getBtResponse(): GetResponseResponse.BehaviorTreeResponse | undefined;
  setBtResponse(value?: GetResponseResponse.BehaviorTreeResponse): GetResponseResponse;
  hasBtResponse(): boolean;
  clearBtResponse(): GetResponseResponse;

  getEmotionResponse(): string;
  setEmotionResponse(value: string): GetResponseResponse;

  getInteractionId(): string;
  setInteractionId(value: string): GetResponseResponse;

  getResponseTypeCase(): GetResponseResponse.ResponseTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseResponse): GetResponseResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseResponse;
  static deserializeBinaryFromReader(message: GetResponseResponse, reader: jspb.BinaryReader): GetResponseResponse;
}

export namespace GetResponseResponse {
  export type AsObject = {
    sessionId: string,
    actionResponse?: GetResponseResponse.ActionResponse.AsObject,
    audioResponse?: GetResponseResponse.AudioResponse.AsObject,
    debugLog: string,
    userQuery?: GetResponseResponse.UserTranscript.AsObject,
    btResponse?: GetResponseResponse.BehaviorTreeResponse.AsObject,
    emotionResponse: string,
    interactionId: string,
  }

  export class AudioResponse extends jspb.Message {
    getAudioData(): Uint8Array | string;
    getAudioData_asU8(): Uint8Array;
    getAudioData_asB64(): string;
    setAudioData(value: Uint8Array | string): AudioResponse;

    getAudioConfig(): AudioConfig | undefined;
    setAudioConfig(value?: AudioConfig): AudioResponse;
    hasAudioConfig(): boolean;
    clearAudioConfig(): AudioResponse;

    getTextData(): string;
    setTextData(value: string): AudioResponse;

    getEndOfResponse(): boolean;
    setEndOfResponse(value: boolean): AudioResponse;

    getFaceData(): string;
    setFaceData(value: string): AudioResponse;

    getVisemesData(): VisemesData | undefined;
    setVisemesData(value?: VisemesData): AudioResponse;
    hasVisemesData(): boolean;
    clearVisemesData(): AudioResponse;

    getBlendshapesData(): BlendShapesData | undefined;
    setBlendshapesData(value?: BlendShapesData): AudioResponse;
    hasBlendshapesData(): boolean;
    clearBlendshapesData(): AudioResponse;

    getFaceEmotion(): arkit_blend_shapes_pb.ARKitBlendShapesData | undefined;
    setFaceEmotion(value?: arkit_blend_shapes_pb.ARKitBlendShapesData): AudioResponse;
    hasFaceEmotion(): boolean;
    clearFaceEmotion(): AudioResponse;

    getEmotionResponse(): EmotionResponse | undefined;
    setEmotionResponse(value?: EmotionResponse): AudioResponse;
    hasEmotionResponse(): boolean;
    clearEmotionResponse(): AudioResponse;

    getFaceDataTypeCase(): AudioResponse.FaceDataTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AudioResponse): AudioResponse.AsObject;
    static serializeBinaryToWriter(message: AudioResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioResponse;
    static deserializeBinaryFromReader(message: AudioResponse, reader: jspb.BinaryReader): AudioResponse;
  }

  export namespace AudioResponse {
    export type AsObject = {
      audioData: Uint8Array | string,
      audioConfig?: AudioConfig.AsObject,
      textData: string,
      endOfResponse: boolean,
      faceData: string,
      visemesData?: VisemesData.AsObject,
      blendshapesData?: BlendShapesData.AsObject,
      faceEmotion?: arkit_blend_shapes_pb.ARKitBlendShapesData.AsObject,
      emotionResponse?: EmotionResponse.AsObject,
    }

    export enum FaceDataTypeCase { 
      FACE_DATA_TYPE_NOT_SET = 0,
      VISEMES_DATA = 6,
      BLENDSHAPES_DATA = 7,
    }
  }


  export class ActionResponse extends jspb.Message {
    getAction(): string;
    setAction(value: string): ActionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ActionResponse): ActionResponse.AsObject;
    static serializeBinaryToWriter(message: ActionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionResponse;
    static deserializeBinaryFromReader(message: ActionResponse, reader: jspb.BinaryReader): ActionResponse;
  }

  export namespace ActionResponse {
    export type AsObject = {
      action: string,
    }
  }


  export class BehaviorTreeResponse extends jspb.Message {
    getBtCode(): string;
    setBtCode(value: string): BehaviorTreeResponse;

    getBtConstants(): string;
    setBtConstants(value: string): BehaviorTreeResponse;

    getNarrativeSectionId(): string;
    setNarrativeSectionId(value: string): BehaviorTreeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BehaviorTreeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BehaviorTreeResponse): BehaviorTreeResponse.AsObject;
    static serializeBinaryToWriter(message: BehaviorTreeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BehaviorTreeResponse;
    static deserializeBinaryFromReader(message: BehaviorTreeResponse, reader: jspb.BinaryReader): BehaviorTreeResponse;
  }

  export namespace BehaviorTreeResponse {
    export type AsObject = {
      btCode: string,
      btConstants: string,
      narrativeSectionId: string,
    }
  }


  export class UserTranscript extends jspb.Message {
    getTextData(): string;
    setTextData(value: string): UserTranscript;

    getIsFinal(): boolean;
    setIsFinal(value: boolean): UserTranscript;

    getEndOfResponse(): boolean;
    setEndOfResponse(value: boolean): UserTranscript;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserTranscript.AsObject;
    static toObject(includeInstance: boolean, msg: UserTranscript): UserTranscript.AsObject;
    static serializeBinaryToWriter(message: UserTranscript, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserTranscript;
    static deserializeBinaryFromReader(message: UserTranscript, reader: jspb.BinaryReader): UserTranscript;
  }

  export namespace UserTranscript {
    export type AsObject = {
      textData: string,
      isFinal: boolean,
      endOfResponse: boolean,
    }
  }


  export enum ResponseTypeCase { 
    RESPONSE_TYPE_NOT_SET = 0,
    ACTION_RESPONSE = 2,
    AUDIO_RESPONSE = 3,
    DEBUG_LOG = 4,
    USER_QUERY = 5,
    BT_RESPONSE = 6,
    EMOTION_RESPONSE = 7,
    INTERACTION_ID = 8,
  }
}

export class VisemesData extends jspb.Message {
  getVisemes(): Viseme | undefined;
  setVisemes(value?: Viseme): VisemesData;
  hasVisemes(): boolean;
  clearVisemes(): VisemesData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisemesData.AsObject;
  static toObject(includeInstance: boolean, msg: VisemesData): VisemesData.AsObject;
  static serializeBinaryToWriter(message: VisemesData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisemesData;
  static deserializeBinaryFromReader(message: VisemesData, reader: jspb.BinaryReader): VisemesData;
}

export namespace VisemesData {
  export type AsObject = {
    visemes?: Viseme.AsObject,
  }
}

export class EmotionResponse extends jspb.Message {
  getEmotion(): string;
  setEmotion(value: string): EmotionResponse;

  getScale(): string;
  setScale(value: string): EmotionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmotionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmotionResponse): EmotionResponse.AsObject;
  static serializeBinaryToWriter(message: EmotionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmotionResponse;
  static deserializeBinaryFromReader(message: EmotionResponse, reader: jspb.BinaryReader): EmotionResponse;
}

export namespace EmotionResponse {
  export type AsObject = {
    emotion: string,
    scale: string,
  }
}

export class Viseme extends jspb.Message {
  getSil(): number;
  setSil(value: number): Viseme;

  getPp(): number;
  setPp(value: number): Viseme;

  getFf(): number;
  setFf(value: number): Viseme;

  getTh(): number;
  setTh(value: number): Viseme;

  getDd(): number;
  setDd(value: number): Viseme;

  getKk(): number;
  setKk(value: number): Viseme;

  getCh(): number;
  setCh(value: number): Viseme;

  getSs(): number;
  setSs(value: number): Viseme;

  getNn(): number;
  setNn(value: number): Viseme;

  getRr(): number;
  setRr(value: number): Viseme;

  getAa(): number;
  setAa(value: number): Viseme;

  getE(): number;
  setE(value: number): Viseme;

  getIh(): number;
  setIh(value: number): Viseme;

  getOh(): number;
  setOh(value: number): Viseme;

  getOu(): number;
  setOu(value: number): Viseme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Viseme.AsObject;
  static toObject(includeInstance: boolean, msg: Viseme): Viseme.AsObject;
  static serializeBinaryToWriter(message: Viseme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Viseme;
  static deserializeBinaryFromReader(message: Viseme, reader: jspb.BinaryReader): Viseme;
}

export namespace Viseme {
  export type AsObject = {
    sil: number,
    pp: number,
    ff: number,
    th: number,
    dd: number,
    kk: number,
    ch: number,
    ss: number,
    nn: number,
    rr: number,
    aa: number,
    e: number,
    ih: number,
    oh: number,
    ou: number,
  }
}

export class BlendShapesData extends jspb.Message {
  getBlendshapeData(): string;
  setBlendshapeData(value: string): BlendShapesData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlendShapesData.AsObject;
  static toObject(includeInstance: boolean, msg: BlendShapesData): BlendShapesData.AsObject;
  static serializeBinaryToWriter(message: BlendShapesData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlendShapesData;
  static deserializeBinaryFromReader(message: BlendShapesData, reader: jspb.BinaryReader): BlendShapesData;
}

export namespace BlendShapesData {
  export type AsObject = {
    blendshapeData: string,
  }
}

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

export class FeedbackRequest extends jspb.Message {
  getInteractionId(): string;
  setInteractionId(value: string): FeedbackRequest;

  getCharacterId(): string;
  setCharacterId(value: string): FeedbackRequest;

  getSessionId(): string;
  setSessionId(value: string): FeedbackRequest;

  getTextFeedback(): FeedbackRequest.Feedback | undefined;
  setTextFeedback(value?: FeedbackRequest.Feedback): FeedbackRequest;
  hasTextFeedback(): boolean;
  clearTextFeedback(): FeedbackRequest;

  getUserQuery(): string;
  setUserQuery(value: string): FeedbackRequest;

  getResponse(): string;
  setResponse(value: string): FeedbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeedbackRequest): FeedbackRequest.AsObject;
  static serializeBinaryToWriter(message: FeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedbackRequest;
  static deserializeBinaryFromReader(message: FeedbackRequest, reader: jspb.BinaryReader): FeedbackRequest;
}

export namespace FeedbackRequest {
  export type AsObject = {
    interactionId: string,
    characterId: string,
    sessionId: string,
    textFeedback?: FeedbackRequest.Feedback.AsObject,
    userQuery: string,
    response: string,
  }

  export class Feedback extends jspb.Message {
    getThumbsUp(): boolean;
    setThumbsUp(value: boolean): Feedback;

    getFeedbackText(): string;
    setFeedbackText(value: string): Feedback;

    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Feedback;
    clearTagsList(): Feedback;
    addTags(value: string, index?: number): Feedback;

    getIsTestCase(): boolean;
    setIsTestCase(value: boolean): Feedback;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feedback.AsObject;
    static toObject(includeInstance: boolean, msg: Feedback): Feedback.AsObject;
    static serializeBinaryToWriter(message: Feedback, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feedback;
    static deserializeBinaryFromReader(message: Feedback, reader: jspb.BinaryReader): Feedback;
  }

  export namespace Feedback {
    export type AsObject = {
      thumbsUp: boolean,
      feedbackText: string,
      tagsList: Array<string>,
      isTestCase: boolean,
    }
  }

}

export class FeedbackResponse extends jspb.Message {
  getFeedbackResponse(): string;
  setFeedbackResponse(value: string): FeedbackResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeedbackResponse): FeedbackResponse.AsObject;
  static serializeBinaryToWriter(message: FeedbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedbackResponse;
  static deserializeBinaryFromReader(message: FeedbackResponse, reader: jspb.BinaryReader): FeedbackResponse;
}

export namespace FeedbackResponse {
  export type AsObject = {
    feedbackResponse: string,
  }
}

export class SessionCache extends jspb.Message {
  getApiKey(): string;
  setApiKey(value: string): SessionCache;

  getUserDetails(): SessionCache.UserDetails | undefined;
  setUserDetails(value?: SessionCache.UserDetails): SessionCache;
  hasUserDetails(): boolean;
  clearUserDetails(): SessionCache;

  getUsageValidator(): SessionCache.UsageValidator | undefined;
  setUsageValidator(value?: SessionCache.UsageValidator): SessionCache;
  hasUsageValidator(): boolean;
  clearUsageValidator(): SessionCache;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionCache.AsObject;
  static toObject(includeInstance: boolean, msg: SessionCache): SessionCache.AsObject;
  static serializeBinaryToWriter(message: SessionCache, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionCache;
  static deserializeBinaryFromReader(message: SessionCache, reader: jspb.BinaryReader): SessionCache;
}

export namespace SessionCache {
  export type AsObject = {
    apiKey: string,
    userDetails?: SessionCache.UserDetails.AsObject,
    usageValidator?: SessionCache.UsageValidator.AsObject,
  }

  export class UserDetails extends jspb.Message {
    getUsername(): string;
    setUsername(value: string): UserDetails;

    getUserId(): string;
    setUserId(value: string): UserDetails;

    getEmail(): string;
    setEmail(value: string): UserDetails;

    getAccessControl(): string;
    setAccessControl(value: string): UserDetails;

    getOrganizationId(): string;
    setOrganizationId(value: string): UserDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDetails.AsObject;
    static toObject(includeInstance: boolean, msg: UserDetails): UserDetails.AsObject;
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
    setApiKey(value: string): UsageValidator;

    getServiceName(): string;
    setServiceName(value: string): UsageValidator;

    getRequestQuota(): string;
    setRequestQuota(value: string): UsageValidator;

    getTtsRequestQuota(): string;
    setTtsRequestQuota(value: string): UsageValidator;

    getProvider(): string;
    setProvider(value: string): UsageValidator;

    getTtsPoolName(): string;
    setTtsPoolName(value: string): UsageValidator;

    getTtsPoolUsageLimits(): string;
    setTtsPoolUsageLimits(value: string): UsageValidator;

    getPlanKey(): string;
    setPlanKey(value: string): UsageValidator;

    getUserPlan(): string;
    setUserPlan(value: string): UsageValidator;

    getThirdPartyIntegrationSettings(): string;
    setThirdPartyIntegrationSettings(value: string): UsageValidator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageValidator.AsObject;
    static toObject(includeInstance: boolean, msg: UsageValidator): UsageValidator.AsObject;
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

}

export enum FaceModel { 
  FACE_MODEL_UNSPECIFIED = 0,
  FACE_MODEL_A_2F_MODEL_NAME = 1,
  FACE_MODEL_PHONEMES_MODEL_NAME = 2,
  FACE_MODEL_OVR_MODEL_NAME = 3,
}
