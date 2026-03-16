import { ConvaiGRPCClientConfigType } from '../shared/types';
export declare const manageClient: (config: ConvaiGRPCClientConfigType) => void;
export declare const setGrpcConfig: (config: ConvaiGRPCClientConfigType) => void;
export declare const generateNewCurrentClient: (config: ConvaiGRPCClientConfigType) => void;
export declare const getCurrentClient: () => ConvaiGRPCClientConfigType;
