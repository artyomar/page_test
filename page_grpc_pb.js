// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var page_pb = require('./page_pb.js');

function serialize_api_Page(arg) {
  if (!(arg instanceof page_pb.Page)) {
    throw new Error('Expected argument of type api.Page');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_Page(buffer_arg) {
  return page_pb.Page.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PageRequest(arg) {
  if (!(arg instanceof page_pb.PageRequest)) {
    throw new Error('Expected argument of type api.PageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PageRequest(buffer_arg) {
  return page_pb.PageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PagesService = exports.PagesService = {
  getPage: {
    path: '/api.Pages/GetPage',
    requestStream: false,
    responseStream: false,
    requestType: page_pb.PageRequest,
    responseType: page_pb.Page,
    requestSerialize: serialize_api_PageRequest,
    requestDeserialize: deserialize_api_PageRequest,
    responseSerialize: serialize_api_Page,
    responseDeserialize: deserialize_api_Page,
  },
};

exports.PagesClient = grpc.makeGenericClientConstructor(PagesService);
