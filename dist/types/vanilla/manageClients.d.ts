import { ConvaiGRPCClient } from './convai_grpc_client';
import { ConvaiGRPCClientConfigType } from '../shared/types';
export declare const setGrpcConfig: (config: ConvaiGRPCClientConfigType) => void;
export declare const generateNewCurrentClient: (config?: ConvaiGRPCClientConfigType) => void;
export declare const getCurrentClient: (config?: ConvaiGRPCClientConfigType) => ConvaiGRPCClient;
export declare const manageClient: (config: ConvaiGRPCClientConfigType) => void;
