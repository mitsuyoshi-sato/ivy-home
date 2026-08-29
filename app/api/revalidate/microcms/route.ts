import { revalidateTag } from 'next/cache'

export const POST = async (request: Request) => {
  const secretWebhook = process.env.MICROCMS_WEBHOOK_SECRET
  const secretRequest = request.headers.get('x-microcms-webhook-secret')
  let revalidated = false
  let status = 401

  if (secretWebhook && secretRequest === secretWebhook) {
    revalidateTag('contents')
    revalidated = true
    status = 200
  }

  return Response.json({ revalidated }, { status })
}
