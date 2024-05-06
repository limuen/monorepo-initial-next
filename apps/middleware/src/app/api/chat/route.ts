import { NextRequest, NextResponse } from "next/server";

function chain(functions: Function[], index = 0) {
  const current = functions[index];
  if (current) {
    const next = chain(functions, index + 1) as Function;
    return current(next);
  }
  return () => NextResponse.next();
}

function withMiddleware1(middleware: any) {
  return async (request: NextRequest) => {
    console.log("middleware1 " + request.url);
    return middleware(request);
  };
}

function withMiddleware2(middleware: any) {
  return async (request: NextRequest) => {
    console.log("middleware2 " + request.url);
    return middleware(request);
  };
}

export default chain([withMiddleware1, withMiddleware2]);

export const config = {
  matcher: "/api/:path*",
};
