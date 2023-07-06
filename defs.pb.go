// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v3.20.3
// source: grpc/defs.proto

package main

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Page struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	MobileRules []byte `protobuf:"bytes,2,opt,name=mobileRules,proto3" json:"mobileRules,omitempty"`
	Test        string `protobuf:"bytes,3,opt,name=test,proto3" json:"test,omitempty"`
}

func (x *Page) Reset() {
	*x = Page{}
	if protoimpl.UnsafeEnabled {
		mi := &file_grpc_defs_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Page) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Page) ProtoMessage() {}

func (x *Page) ProtoReflect() protoreflect.Message {
	mi := &file_grpc_defs_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Page.ProtoReflect.Descriptor instead.
func (*Page) Descriptor() ([]byte, []int) {
	return file_grpc_defs_proto_rawDescGZIP(), []int{0}
}

func (x *Page) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Page) GetMobileRules() []byte {
	if x != nil {
		return x.MobileRules
	}
	return nil
}

func (x *Page) GetTest() string {
	if x != nil {
		return x.Test
	}
	return ""
}

type PageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *PageRequest) Reset() {
	*x = PageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_grpc_defs_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PageRequest) ProtoMessage() {}

func (x *PageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_grpc_defs_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PageRequest.ProtoReflect.Descriptor instead.
func (*PageRequest) Descriptor() ([]byte, []int) {
	return file_grpc_defs_proto_rawDescGZIP(), []int{1}
}

func (x *PageRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_grpc_defs_proto protoreflect.FileDescriptor

var file_grpc_defs_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x64, 0x65, 0x66, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x6d, 0x61, 0x69, 0x6e, 0x22, 0x4c, 0x0a, 0x04, 0x50, 0x61, 0x67, 0x65, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x20, 0x0a, 0x0b, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x52, 0x75, 0x6c, 0x65, 0x73, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0c, 0x52, 0x0b, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x52, 0x75, 0x6c, 0x65,
	0x73, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x73, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x74, 0x65, 0x73, 0x74, 0x22, 0x1d, 0x0a, 0x0b, 0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x32, 0x33, 0x0a, 0x05, 0x50, 0x61, 0x67, 0x65, 0x73, 0x12, 0x2a, 0x0a,
	0x07, 0x47, 0x65, 0x74, 0x50, 0x61, 0x67, 0x65, 0x12, 0x11, 0x2e, 0x6d, 0x61, 0x69, 0x6e, 0x2e,
	0x50, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x0a, 0x2e, 0x6d, 0x61,
	0x69, 0x6e, 0x2e, 0x50, 0x61, 0x67, 0x65, 0x22, 0x00, 0x42, 0x08, 0x5a, 0x06, 0x2e, 0x3b, 0x6d,
	0x61, 0x69, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_grpc_defs_proto_rawDescOnce sync.Once
	file_grpc_defs_proto_rawDescData = file_grpc_defs_proto_rawDesc
)

func file_grpc_defs_proto_rawDescGZIP() []byte {
	file_grpc_defs_proto_rawDescOnce.Do(func() {
		file_grpc_defs_proto_rawDescData = protoimpl.X.CompressGZIP(file_grpc_defs_proto_rawDescData)
	})
	return file_grpc_defs_proto_rawDescData
}

var file_grpc_defs_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_grpc_defs_proto_goTypes = []interface{}{
	(*Page)(nil),        // 0: main.Page
	(*PageRequest)(nil), // 1: main.PageRequest
}
var file_grpc_defs_proto_depIdxs = []int32{
	1, // 0: main.Pages.GetPage:input_type -> main.PageRequest
	0, // 1: main.Pages.GetPage:output_type -> main.Page
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_grpc_defs_proto_init() }
func file_grpc_defs_proto_init() {
	if File_grpc_defs_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_grpc_defs_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Page); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_grpc_defs_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PageRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_grpc_defs_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_grpc_defs_proto_goTypes,
		DependencyIndexes: file_grpc_defs_proto_depIdxs,
		MessageInfos:      file_grpc_defs_proto_msgTypes,
	}.Build()
	File_grpc_defs_proto = out.File
	file_grpc_defs_proto_rawDesc = nil
	file_grpc_defs_proto_goTypes = nil
	file_grpc_defs_proto_depIdxs = nil
}