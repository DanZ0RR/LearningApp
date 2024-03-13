import { updateSession } from '@/utils/middleware'
import { NextRequest } from 'next/server'
import readUserSession from "@/lib/readUserSession";

export async function middleware(request: NextRequest) {
  const data = await readUserSession()
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/dashboard',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
