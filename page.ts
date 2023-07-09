/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "pages";

export interface Page {
  id: string;
  mobileRules: Uint8Array;
  test: string;
}

export interface PageRequest {
  id: string;
}

function createBasePage(): Page {
  return { id: "", mobileRules: new Uint8Array(0), test: "" };
}

export const Page = {
  encode(message: Page, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.mobileRules.length !== 0) {
      writer.uint32(18).bytes(message.mobileRules);
    }
    if (message.test !== "") {
      writer.uint32(26).string(message.test);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Page {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mobileRules = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.test = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Page {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      mobileRules: isSet(object.mobileRules) ? bytesFromBase64(object.mobileRules) : new Uint8Array(0),
      test: isSet(object.test) ? String(object.test) : "",
    };
  },

  toJSON(message: Page): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.mobileRules !== undefined &&
      (obj.mobileRules = base64FromBytes(message.mobileRules !== undefined ? message.mobileRules : new Uint8Array(0)));
    message.test !== undefined && (obj.test = message.test);
    return obj;
  },

  create<I extends Exact<DeepPartial<Page>, I>>(base?: I): Page {
    return Page.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Page>, I>>(object: I): Page {
    const message = createBasePage();
    message.id = object.id ?? "";
    message.mobileRules = object.mobileRules ?? new Uint8Array(0);
    message.test = object.test ?? "";
    return message;
  },
};

function createBasePageRequest(): PageRequest {
  return { id: "" };
}

export const PageRequest = {
  encode(message: PageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PageRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PageRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<PageRequest>, I>>(base?: I): PageRequest {
    return PageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PageRequest>, I>>(object: I): PageRequest {
    const message = createBasePageRequest();
    message.id = object.id ?? "";
    return message;
  },
};

export type PagesService = typeof PagesService;
export const PagesService = {
  getPage: {
    path: "/pages.Pages/GetPage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PageRequest) => Buffer.from(PageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PageRequest.decode(value),
    responseSerialize: (value: Page) => Buffer.from(Page.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Page.decode(value),
  },
} as const;

export interface PagesServer extends UntypedServiceImplementation {
  getPage: handleUnaryCall<PageRequest, Page>;
}

export interface PagesClient extends Client {
  getPage(request: PageRequest, callback: (error: ServiceError | null, response: Page) => void): ClientUnaryCall;
  getPage(
    request: PageRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Page) => void,
  ): ClientUnaryCall;
  getPage(
    request: PageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Page) => void,
  ): ClientUnaryCall;
}

export const PagesClient = makeGenericClientConstructor(PagesService, "pages.Pages") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PagesClient;
  service: typeof PagesService;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
