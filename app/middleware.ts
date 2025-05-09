import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isTokenOk = Boolean(token);

  const { pathname } = req.nextUrl;

  // Redirect logged-in users away from login/register
  if (isTokenOk && (pathname === "/login" || pathname === "/register")) {
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = "/dashboard";
    return NextResponse.redirect(dashboardUrl);
  }

  // Redirect unauthenticated users trying to access dashboard
  if (!isTokenOk && pathname.startsWith("/dashboard")) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

// 👇 This tells Next.js which routes this middleware should run on
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
