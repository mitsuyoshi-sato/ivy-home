'use server'

import { Resend } from 'resend'
import { z } from 'zod'

import { type Schema, schema } from './schema'

export const action = async (data: Schema, turnstileToken: string) => {
  const result = schema.safeParse(data)

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
      message: '入力内容を確認してください。',
      success: false,
    }
  }

  try {
    const responseTurnstile = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      },
    )

    const dataTurnstile = (await responseTurnstile.json()) as {
      success: boolean
      'error-codes'?: string[]
    }

    console.log({ dataTurnstile })

    if (!dataTurnstile.success) {
      return {
        errors: {},
        message: '認証に失敗しました。もう一度お試しください。',
        success: false,
      }
    }

    const keyResend = process.env.RESEND_API_KEY
    const emailFrom = process.env.CONTACT_FROM_EMAIL
    const emailsTo = (process.env.CONTACT_TO_EMAIL ?? '')
      .split(',')
      .map((e) => e.trim())
      .filter((e) => e.length > 0)

    if (!keyResend || !emailFrom || emailsTo.length === 0) {
      throw new Error('メール送信に必要な環境変数が設定されていません')
    }

    const resultEmail = await new Resend(keyResend).emails.send({
      from: emailFrom,
      replyTo:
        result.data.contactMethod === 'email' ? result.data.email : undefined,
      subject: '【Ivy Home】無料相談フォームからのお問い合わせ',
      text: `LPお問い合わせを受信しました！

【お名前】${result.data.name}
【ご希望の連絡方法】${result.data.contactMethod === 'phone' ? `電話（${result.data.phone}）` : `メール（${result.data.email}）`}
【お住まいの地域】${__label.area[result.data.area]}
【市区町村】${result.data.city || '未入力'}
【ご相談内容】${__label.consultation[result.data.consultationType]}

【ご質問・ご要望】
${result.data.message || '未入力'}`,
      to: emailsTo,
    })

    if (resultEmail.error) {
      throw new Error(resultEmail.error.message)
    }

    return {
      errors: {},
      message: '',
      success: true,
    }
  } catch {
    return {
      errors: {},
      message:
        '送信処理中に問題が発生しました。時間をおいて、もう一度お試しください。',
      success: false,
    }
  }
}

const __label = {
  area: {
    ehime: '愛媛県',
    kochi: '高知県',
    other: 'その他',
  },
  consultation: {
    battery: '蓄電池',
    both: '太陽光・蓄電池の両方',
    other: 'その他',
    solar: '太陽光',
  },
} as const
