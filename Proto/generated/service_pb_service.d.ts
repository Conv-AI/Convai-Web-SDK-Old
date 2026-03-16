// package: service
// file: service.proto

import * as service_pb from "./service_pb";
import { grpc } from "@improbable-eng/grpc-web";

export class ConvaiService {
  static serviceName: string;
}

export namespace ConvaiService {
  export const Hello: {
    methodName: string;
    service: typeof ConvaiService;
    requestStream: boolean;
    responseStream: boolean;
    requestType: typeof service_pb.HelloRequest;
    responseType: typeof service_pb.HelloResponse;
  };

  export const HelloStream: {
    methodName: string;
    service: typeof ConvaiService;
    requestStream: boolean;
    responseStream: boolean;
    requestType: typeof service_pb.HelloRequest;
    responseType: typeof service_pb.HelloResponse;
  };

  export const SpeechToText: {
    methodName: string;
    service: typeof ConvaiService;
    requestStream: boolean;
    responseStream: boolean;
    requestType: typeof service_pb.STTRequest;
    responseType: typeof service_pb.STTResponse;
  };

  export const GetResponse: {
    methodName: string;
    service: typeof ConvaiService;
    requestStream: boolean;
    responseStream: boolean;
    requestType: typeof service_pb.GetResponseRequest;
    responseType: typeof service_pb.GetResponseResponse;
  };

  export const GetResponseSingle: {
    methodName: string;
    service: typeof ConvaiService;
    requestStream: boolean;
    responseStream: boolean;
    requestType: typeof service_pb.GetResponseRequestSingle;
    responseType: typeof service_pb.GetResponseResponse;
  };

  export const SubmitFeedback: {
    methodName: string;
    service: typeof ConvaiService;
    requestStream: boolean;
    responseStream: boolean;
    requestType: typeof service_pb.FeedbackRequest;
    responseType: typeof service_pb.FeedbackResponse;
  };
}
