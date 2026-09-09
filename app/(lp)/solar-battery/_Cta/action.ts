'use server'

import { z } from 'zod'

import { type Schema, schema } from './schema'

export const action = async (data: Schema) => {
  const result = schema.safeParse(data)

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
      message: '入力内容を確認してください。',
      success: false,
    }
  }

  try {
    // Resendのメール送信処理をここに追加する
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
