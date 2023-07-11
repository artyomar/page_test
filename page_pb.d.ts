// package: api
// file: page.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Page extends jspb.Message { 
    getId(): string;
    setId(value: string): Page;
    getMobilerules(): Uint8Array | string;
    getMobilerules_asU8(): Uint8Array;
    getMobilerules_asB64(): string;
    setMobilerules(value: Uint8Array | string): Page;
    getTest(): string;
    setTest(value: string): Page;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Page.AsObject;
    static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Page;
    static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
    export type AsObject = {
        id: string,
        mobilerules: Uint8Array | string,
        test: string,
    }
}

export class PageRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): PageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PageRequest): PageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageRequest;
    static deserializeBinaryFromReader(message: PageRequest, reader: jspb.BinaryReader): PageRequest;
}

export namespace PageRequest {
    export type AsObject = {
        id: string,
    }
}
