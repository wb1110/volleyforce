import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession, shouldByPassMiddleware } from "@frontegg/nextjs/edge";

export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  if (
    shouldByPassMiddleware(
      pathname /*, options: optional bypass configuration */
    )
  ) {
    return NextResponse.next();
  }

  const session = await getSession(request);
  if (!session) {
    //  redirect unauthenticated user to /account/login page
    const loginUrl = `/account/login?redirectUrl=${encodeURIComponent(
      pathname
    )}`;
    return NextResponse.redirect(
      new URL(loginUrl, process.env["FRONTEGG_APP_URL"])
    );
  }
  return NextResponse.next();
};

export const config = {
  matcher: "/(.*)",
};
