import z from 'zod'

export const schema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'お名前を入力してください')
      .max(50, '50文字以内で入力してください'),
    contactMethod: z.enum(['email', 'phone']),
    email: z
      .string()
      .email('メールアドレスの形式が正しくありません')
      .or(z.literal(''))
      .default(''),
    phone: z
      .string()
      .regex(/^\d{10,11}$/, '電話番号は10〜11桁の数字で入力してください')
      .or(z.literal(''))
      .default(''),
    area: z.enum(['ehime', 'kochi', 'other']),
    city: z.string().max(50, '50文字以内で入力してください'),
    consultationType: z.enum(['solar', 'battery', 'both', 'other']),
    message: z.string().max(500, '500文字以内で入力してください'),
  })
  .refine(
    ({ contactMethod, email }) => contactMethod !== 'email' || email !== '',
    {
      message: 'メールアドレスを入力してください',
      path: ['email'],
    },
  )
  .refine(
    ({ contactMethod, phone }) => contactMethod !== 'phone' || phone !== '',
    {
      message: '電話番号を入力してください',
      path: ['phone'],
    },
  )

export type Schema = z.input<typeof schema>
