// 手动设置为了动态渲染模式
export const dynamic = 'force-dynamic'

export async function GET(request: any) {
  const searchParams = request.nextUrl.searchParams
  return Response.json({ data: new Date().toLocaleTimeString(), params: searchParams.toString() })
}