import { NextResponse } from 'next/server'

import { nameCookieContentPreview } from '@/app/data/content'
import { getContentPreview } from '@/app/data/contentApi'

export const GET = async (request: Request) => {
  const url = new URL(request.url)
  const contentId = url.searchParams.get('contentId')
  const draftKey = url.searchParams.get('draftKey')
  let response: NextResponse = NextResponse.json(
    { message: 'contentIdまたはdraftKeyが不正です' },
    { status: 400 },
  )

  if (contentId && draftKey) {
    const data = await getContentPreview(contentId, draftKey)

    if (data) {
      const pathContentPreview = `/preview/${encodeURIComponent(data.id)}`

      response = NextResponse.redirect(new URL(pathContentPreview, request.url))
      response.cookies.set(nameCookieContentPreview, draftKey, {
        httpOnly: true,
        maxAge: 60 * 60,
        path: pathContentPreview,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    }
  }

  response.headers.set('Cache-Control', 'no-store')

  return response
}
