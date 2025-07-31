import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path starts with /admin
  if (pathname.startsWith('/admin')) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // If the user is not authenticated or not an admin, redirect to login
    if (!token || token.role !== 'ADMIN') {
      const url = new URL('/auth/login', request.url);
      
      // Set callback URL to /admin instead of the full URL to avoid redirect loops
      // with non-existent pages like /admin/login
      url.searchParams.set('callbackUrl', '/admin');
      
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
