import 'server-only'

import { createClient } from 'microcms-js-sdk'

export const clientMicrocms = (() => {
  const apiKey = process.env.MICROCMS_API_KEY
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN

  if (!apiKey) {
    throw new Error('MICROCMS_API_KEYが設定されていません')
  }

  if (!serviceDomain) {
    throw new Error('MICROCMS_SERVICE_DOMAINが設定されていません')
  }

  return createClient({ apiKey, retry: true, serviceDomain })
})()
