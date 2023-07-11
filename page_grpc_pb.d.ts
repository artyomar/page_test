// package: api
// file: page.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as page_pb from "./page_pb";

interface IPagesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPage: IPagesService_IGetPage;
}

interface IPagesService_IGetPage extends grpc.MethodDefinition<page_pb.PageRequest, page_pb.Page> {
    path: "/api.Pages/GetPage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<page_pb.PageRequest>;
    requestDeserialize: grpc.deserialize<page_pb.PageRequest>;
    responseSerialize: grpc.serialize<page_pb.Page>;
    responseDeserialize: grpc.deserialize<page_pb.Page>;
}

export const PagesService: IPagesService;

export interface IPagesServer extends grpc.UntypedServiceImplementation {
    getPage: grpc.handleUnaryCall<page_pb.PageRequest, page_pb.Page>;
}

export interface IPagesClient {
    getPage(request: page_pb.PageRequest, callback: (error: grpc.ServiceError | null, response: page_pb.Page) => void): grpc.ClientUnaryCall;
    getPage(request: page_pb.PageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: page_pb.Page) => void): grpc.ClientUnaryCall;
    getPage(request: page_pb.PageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: page_pb.Page) => void): grpc.ClientUnaryCall;
}

export class PagesClient extends grpc.Client implements IPagesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPage(request: page_pb.PageRequest, callback: (error: grpc.ServiceError | null, response: page_pb.Page) => void): grpc.ClientUnaryCall;
    public getPage(request: page_pb.PageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: page_pb.Page) => void): grpc.ClientUnaryCall;
    public getPage(request: page_pb.PageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: page_pb.Page) => void): grpc.ClientUnaryCall;
}
