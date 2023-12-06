import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


//This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth');
  console.log(authCookie)
  
  //check the existense og the cookie
  if (!authCookie) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  //check if user attemp to log in
  if (request.nextUrl.pathname.startsWith('/sign-up') && authCookie) {
    return NextResponse.next()
  }
  if (request.nextUrl.pathname.startsWith('/sign-in') && authCookie) {
    return NextResponse.next()
  }

  //default redirect
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/sign-in', '/sign-up', '/profile', '/goal/:id'],
}
