// app/api/route.js
export async function GET(request: any) {
  const token = request.cookies.get("token");
  request.cookies.set(`token2`, 123);
}

// app/api/route.js
import { cookies } from "next/headers";
// 如何处理 Cookie？
export async function GETCookies(request: any) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  });
}

// app/api/route.js
// 如何处理 Headers ？
export async function GET2(request: any) {
  const headersList = new Headers(request.headers);
  const referer = headersList.get("referer");
}


// app/api/route.js
import { headers } from 'next/headers'
 
export async function GET3(request: any) {
  const headersList: any = headers()
  const referer = headersList.get('referer')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}