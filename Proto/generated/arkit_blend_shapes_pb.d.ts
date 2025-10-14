import * as jspb from 'google-protobuf'



export class ARKitBlendShapesData extends jspb.Message {
  getArKitBlendShapes(): ARKitBlendShapes | undefined;
  setArKitBlendShapes(value?: ARKitBlendShapes): ARKitBlendShapesData;
  hasArKitBlendShapes(): boolean;
  clearArKitBlendShapes(): ARKitBlendShapesData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ARKitBlendShapesData.AsObject;
  static toObject(includeInstance: boolean, msg: ARKitBlendShapesData): ARKitBlendShapesData.AsObject;
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
  setBrowDownLeft(value: number): ARKitBlendShapes;

  getBrowDownRight(): number;
  setBrowDownRight(value: number): ARKitBlendShapes;

  getBrowInnerUp(): number;
  setBrowInnerUp(value: number): ARKitBlendShapes;

  getBrowOuterUpLeft(): number;
  setBrowOuterUpLeft(value: number): ARKitBlendShapes;

  getBrowOuterUpRight(): number;
  setBrowOuterUpRight(value: number): ARKitBlendShapes;

  getCheekPuff(): number;
  setCheekPuff(value: number): ARKitBlendShapes;

  getCheekSquintLeft(): number;
  setCheekSquintLeft(value: number): ARKitBlendShapes;

  getCheekSquintRight(): number;
  setCheekSquintRight(value: number): ARKitBlendShapes;

  getEyeBlinkLeft(): number;
  setEyeBlinkLeft(value: number): ARKitBlendShapes;

  getEyeBlinkRight(): number;
  setEyeBlinkRight(value: number): ARKitBlendShapes;

  getEyeLookDownLeft(): number;
  setEyeLookDownLeft(value: number): ARKitBlendShapes;

  getEyeLookDownRight(): number;
  setEyeLookDownRight(value: number): ARKitBlendShapes;

  getEyeLookInLeft(): number;
  setEyeLookInLeft(value: number): ARKitBlendShapes;

  getEyeLookInRight(): number;
  setEyeLookInRight(value: number): ARKitBlendShapes;

  getEyeLookOutLeft(): number;
  setEyeLookOutLeft(value: number): ARKitBlendShapes;

  getEyeLookOutRight(): number;
  setEyeLookOutRight(value: number): ARKitBlendShapes;

  getEyeLookUpLeft(): number;
  setEyeLookUpLeft(value: number): ARKitBlendShapes;

  getEyeLookUpRight(): number;
  setEyeLookUpRight(value: number): ARKitBlendShapes;

  getEyeSquintLeft(): number;
  setEyeSquintLeft(value: number): ARKitBlendShapes;

  getEyeSquintRight(): number;
  setEyeSquintRight(value: number): ARKitBlendShapes;

  getEyeWideLeft(): number;
  setEyeWideLeft(value: number): ARKitBlendShapes;

  getEyeWideRight(): number;
  setEyeWideRight(value: number): ARKitBlendShapes;

  getJawForward(): number;
  setJawForward(value: number): ARKitBlendShapes;

  getJawLeft(): number;
  setJawLeft(value: number): ARKitBlendShapes;

  getJawOpen(): number;
  setJawOpen(value: number): ARKitBlendShapes;

  getJawRight(): number;
  setJawRight(value: number): ARKitBlendShapes;

  getMouthClose(): number;
  setMouthClose(value: number): ARKitBlendShapes;

  getMouthDimpleLeft(): number;
  setMouthDimpleLeft(value: number): ARKitBlendShapes;

  getMouthDimpleRight(): number;
  setMouthDimpleRight(value: number): ARKitBlendShapes;

  getMouthFrownLeft(): number;
  setMouthFrownLeft(value: number): ARKitBlendShapes;

  getMouthFrownRight(): number;
  setMouthFrownRight(value: number): ARKitBlendShapes;

  getMouthFunnel(): number;
  setMouthFunnel(value: number): ARKitBlendShapes;

  getMouthLeft(): number;
  setMouthLeft(value: number): ARKitBlendShapes;

  getMouthLowerDownLeft(): number;
  setMouthLowerDownLeft(value: number): ARKitBlendShapes;

  getMouthLowerDownRight(): number;
  setMouthLowerDownRight(value: number): ARKitBlendShapes;

  getMouthPressLeft(): number;
  setMouthPressLeft(value: number): ARKitBlendShapes;

  getMouthPressRight(): number;
  setMouthPressRight(value: number): ARKitBlendShapes;

  getMouthPucker(): number;
  setMouthPucker(value: number): ARKitBlendShapes;

  getMouthRight(): number;
  setMouthRight(value: number): ARKitBlendShapes;

  getMouthRollLower(): number;
  setMouthRollLower(value: number): ARKitBlendShapes;

  getMouthRollUpper(): number;
  setMouthRollUpper(value: number): ARKitBlendShapes;

  getMouthShrugLower(): number;
  setMouthShrugLower(value: number): ARKitBlendShapes;

  getMouthShrugUpper(): number;
  setMouthShrugUpper(value: number): ARKitBlendShapes;

  getMouthSmileLeft(): number;
  setMouthSmileLeft(value: number): ARKitBlendShapes;

  getMouthSmileRight(): number;
  setMouthSmileRight(value: number): ARKitBlendShapes;

  getMouthStretchLeft(): number;
  setMouthStretchLeft(value: number): ARKitBlendShapes;

  getMouthStretchRight(): number;
  setMouthStretchRight(value: number): ARKitBlendShapes;

  getMouthUpperUpLeft(): number;
  setMouthUpperUpLeft(value: number): ARKitBlendShapes;

  getMouthUpperUpRight(): number;
  setMouthUpperUpRight(value: number): ARKitBlendShapes;

  getNoseSneerLeft(): number;
  setNoseSneerLeft(value: number): ARKitBlendShapes;

  getNoseSneerRight(): number;
  setNoseSneerRight(value: number): ARKitBlendShapes;

  getTongueOut(): number;
  setTongueOut(value: number): ARKitBlendShapes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ARKitBlendShapes.AsObject;
  static toObject(includeInstance: boolean, msg: ARKitBlendShapes): ARKitBlendShapes.AsObject;
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

