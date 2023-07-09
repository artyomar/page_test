// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.20.3
// source: page.proto

package pages

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Pages_GetPage_FullMethodName = "/pages.Pages/GetPage"
)

// PagesClient is the client API for Pages service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PagesClient interface {
	GetPage(ctx context.Context, in *PageRequest, opts ...grpc.CallOption) (*Page, error)
}

type pagesClient struct {
	cc grpc.ClientConnInterface
}

func NewPagesClient(cc grpc.ClientConnInterface) PagesClient {
	return &pagesClient{cc}
}

func (c *pagesClient) GetPage(ctx context.Context, in *PageRequest, opts ...grpc.CallOption) (*Page, error) {
	out := new(Page)
	err := c.cc.Invoke(ctx, Pages_GetPage_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PagesServer is the server API for Pages service.
// All implementations must embed UnimplementedPagesServer
// for forward compatibility
type PagesServer interface {
	GetPage(context.Context, *PageRequest) (*Page, error)
	mustEmbedUnimplementedPagesServer()
}

// UnimplementedPagesServer must be embedded to have forward compatible implementations.
type UnimplementedPagesServer struct {
}

func (UnimplementedPagesServer) GetPage(context.Context, *PageRequest) (*Page, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPage not implemented")
}
func (UnimplementedPagesServer) mustEmbedUnimplementedPagesServer() {}

// UnsafePagesServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PagesServer will
// result in compilation errors.
type UnsafePagesServer interface {
	mustEmbedUnimplementedPagesServer()
}

func RegisterPagesServer(s grpc.ServiceRegistrar, srv PagesServer) {
	s.RegisterService(&Pages_ServiceDesc, srv)
}

func _Pages_GetPage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PagesServer).GetPage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Pages_GetPage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PagesServer).GetPage(ctx, req.(*PageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Pages_ServiceDesc is the grpc.ServiceDesc for Pages service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Pages_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pages.Pages",
	HandlerType: (*PagesServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPage",
			Handler:    _Pages_GetPage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "page.proto",
}
