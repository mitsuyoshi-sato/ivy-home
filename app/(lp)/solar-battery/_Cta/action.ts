'use server'

import { z } from 'zod'

import { type Schema, schema } from './schema'

export type ActionState = {
  errors: Partial<Record<keyof Schema, string[] | undefined>>
  message: string
  success: boolean
}

export const action = async (
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  const result = schema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
      message: '',
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
