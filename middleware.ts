import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


//This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth');
  const onboardedCookie = request.cookies.get('onboarded');

  console.log(authCookie)

  //check if the user is athenticated but no onboarded
  if (authCookie && !onboardedCookie && request.nextUrl.pathname !== '/onboarding') return NextResponse.redirect(new URL('/onboarding', request.url))

  //check if user is not register and redirect to sign 
  if (request.nextUrl.pathname.startsWith('/sign-up') && !authCookie) {
    return NextResponse.next()
  }
  if (
    !authCookie &&
    (!request.nextUrl.pathname.startsWith('/sign-in') || !request.nextUrl.pathname.startsWith('/sign-up'))
  ) {
    return NextResponse.rewrite(new URL('/sign-in', request.url))
  }

  //default redirect
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/sign-in', '/sign-up', '/onboarding'],
}
