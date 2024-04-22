// app/api/search/route.js
// 访问 /api/search?query=hello
export function GET(request: any) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') // query
}