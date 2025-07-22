// package: service
// file: rpc/arkit_blend_shapes.proto

import * as jspb from "google-protobuf";

export class ARKitBlendShapesData extends jspb.Message {
  hasArKitBlendShapes(): boolean;
  clearArKitBlendShapes(): void;
  getArKitBlendShapes(): ARKitBlendShapes | undefined;
  setArKitBlendShapes(value?: ARKitBlendShapes): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ARKitBlendShapesData.AsObject;
  static toObject(includeInstance: boolean, msg: ARKitBlendShapesData): ARKitBlendShapesData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ARKitBlendShapesData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ARKitBlendShapesData;
  static deserializeBinaryFromReader(message: ARKitBlendShapesData, reader: jspb.BinaryReader): ARKitBlendShapesData;
}

export namespace ARKitBlendShapesData {
  export type AsObject = {
    arKitBlendShapes?: ARKitBlendShapes.AsObject,
  }
}

export class ARKitBlendShapes extends jspb.Message {
  getBrowDownLeft(): number;
  setBrowDownLeft(value: number): void;

  getBrowDownRight(): number;
  setBrowDownRight(value: number): void;

  getBrowInnerUp(): number;
  setBrowInnerUp(value: number): void;

  getBrowOuterUpLeft(): number;
  setBrowOuterUpLeft(value: number): void;

  getBrowOuterUpRight(): number;
  setBrowOuterUpRight(value: number): void;

  getCheekPuff(): number;
  setCheekPuff(value: number): void;

  getCheekSquintLeft(): number;
  setCheekSquintLeft(value: number): void;

  getCheekSquintRight(): number;
  setCheekSquintRight(value: number): void;

  getEyeBlinkLeft(): number;
  setEyeBlinkLeft(value: number): void;

  getEyeBlinkRight(): number;
  setEyeBlinkRight(value: number): void;

  getEyeLookDownLeft(): number;
  setEyeLookDownLeft(value: number): void;

  getEyeLookDownRight(): number;
  setEyeLookDownRight(value: number): void;

  getEyeLookInLeft(): number;
  setEyeLookInLeft(value: number): void;

  getEyeLookInRight(): number;
  setEyeLookInRight(value: number): void;

  getEyeLookOutLeft(): number;
  setEyeLookOutLeft(value: number): void;

  getEyeLookOutRight(): number;
  setEyeLookOutRight(value: number): void;

  getEyeLookUpLeft(): number;
  setEyeLookUpLeft(value: number): void;

  getEyeLookUpRight(): number;
  setEyeLookUpRight(value: number): void;

  getEyeSquintLeft(): number;
  setEyeSquintLeft(value: number): void;

  getEyeSquintRight(): number;
  setEyeSquintRight(value: number): void;

  getEyeWideLeft(): number;
  setEyeWideLeft(value: number): void;

  getEyeWideRight(): number;
  setEyeWideRight(value: number): void;

  getJawForward(): number;
  setJawForward(value: number): void;

  getJawLeft(): number;
  setJawLeft(value: number): void;

  getJawOpen(): number;
  setJawOpen(value: number): void;

  getJawRight(): number;
  setJawRight(value: number): void;

  getMouthClose(): number;
  setMouthClose(value: number): void;

  getMouthDimpleLeft(): number;
  setMouthDimpleLeft(value: number): void;

  getMouthDimpleRight(): number;
  setMouthDimpleRight(value: number): void;

  getMouthFrownLeft(): number;
  setMouthFrownLeft(value: number): void;

  getMouthFrownRight(): number;
  setMouthFrownRight(value: number): void;

  getMouthFunnel(): number;
  setMouthFunnel(value: number): void;

  getMouthLeft(): number;
  setMouthLeft(value: number): void;

  getMouthLowerDownLeft(): number;
  setMouthLowerDownLeft(value: number): void;

  getMouthLowerDownRight(): number;
  setMouthLowerDownRight(value: number): void;

  getMouthPressLeft(): number;
  setMouthPressLeft(value: number): void;

  getMouthPressRight(): number;
  setMouthPressRight(value: number): void;

  getMouthPucker(): number;
  setMouthPucker(value: number): void;

  getMouthRight(): number;
  setMouthRight(value: number): void;

  getMouthRollLower(): number;
  setMouthRollLower(value: number): void;

  getMouthRollUpper(): number;
  setMouthRollUpper(value: number): void;

  getMouthShrugLower(): number;
  setMouthShrugLower(value: number): void;

  getMouthShrugUpper(): number;
  setMouthShrugUpper(value: number): void;

  getMouthSmileLeft(): number;
  setMouthSmileLeft(value: number): void;

  getMouthSmileRight(): number;
  setMouthSmileRight(value: number): void;

  getMouthStretchLeft(): number;
  setMouthStretchLeft(value: number): void;

  getMouthStretchRight(): number;
  setMouthStretchRight(value: number): void;

  getMouthUpperUpLeft(): number;
  setMouthUpperUpLeft(value: number): void;

  getMouthUpperUpRight(): number;
  setMouthUpperUpRight(value: number): void;

  getNoseSneerLeft(): number;
  setNoseSneerLeft(value: number): void;

  getNoseSneerRight(): number;
  setNoseSneerRight(value: number): void;

  getTongueOut(): number;
  setTongueOut(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ARKitBlendShapes.AsObject;
  static toObject(includeInstance: boolean, msg: ARKitBlendShapes): ARKitBlendShapes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ARKitBlendShapes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ARKitBlendShapes;
  static deserializeBinaryFromReader(message: ARKitBlendShapes, reader: jspb.BinaryReader): ARKitBlendShapes;
}

export namespace ARKitBlendShapes {
  export type AsObject = {
    browDownLeft: number,
    browDownRight: number,
    browInnerUp: number,
    browOuterUpLeft: number,
    browOuterUpRight: number,
    cheekPuff: number,
    cheekSquintLeft: number,
    cheekSquintRight: number,
    eyeBlinkLeft: number,
    eyeBlinkRight: number,
    eyeLookDownLeft: number,
    eyeLookDownRight: number,
    eyeLookInLeft: number,
    eyeLookInRight: number,
    eyeLookOutLeft: number,
    eyeLookOutRight: number,
    eyeLookUpLeft: number,
    eyeLookUpRight: number,
    eyeSquintLeft: number,
    eyeSquintRight: number,
    eyeWideLeft: number,
    eyeWideRight: number,
    jawForward: number,
    jawLeft: number,
    jawOpen: number,
    jawRight: number,
    mouthClose: number,
    mouthDimpleLeft: number,
    mouthDimpleRight: number,
    mouthFrownLeft: number,
    mouthFrownRight: number,
    mouthFunnel: number,
    mouthLeft: number,
    mouthLowerDownLeft: number,
    mouthLowerDownRight: number,
    mouthPressLeft: number,
    mouthPressRight: number,
    mouthPucker: number,
    mouthRight: number,
    mouthRollLower: number,
    mouthRollUpper: number,
    mouthShrugLower: number,
    mouthShrugUpper: number,
    mouthSmileLeft: number,
    mouthSmileRight: number,
    mouthStretchLeft: number,
    mouthStretchRight: number,
    mouthUpperUpLeft: number,
    mouthUpperUpRight: number,
    noseSneerLeft: number,
    noseSneerRight: number,
    tongueOut: number,
  }
}

