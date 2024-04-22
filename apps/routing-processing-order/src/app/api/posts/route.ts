import { NextResponse } from "next/server";
// request 对象是一个 NextRequest 对象，它是基于 Web Request API 的扩展。使用 request ，你可以快捷读取 cookies 和处理 URL。

export async function GET(request: any, context: any) {
  //  访问 /home, pathname 的值为 /home
  const pathname = request.nextUrl.pathname;
  // 访问 /home?name=lee, searchParams 的值为 { 'name': 'lee' }
  const searchParams = request.nextUrl.searchParams;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const article = await request.json();

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 201 }
  );
}
