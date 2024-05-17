import { NextResponse } from "next/server";

const data = ["阅读", "写作", "冥想"];

export async function GET() {
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const todo: any = formData.get("todo");
  data.push(todo);
  return NextResponse.json({ data });
}
