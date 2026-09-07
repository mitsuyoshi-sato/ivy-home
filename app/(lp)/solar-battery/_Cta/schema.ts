import z from 'zod'

export const schema = z
  .object({
    name: z.string().min(1, 'お名前を入力してください'),
    contactMethod: z.enum(['email', 'phone']),
    email: z
      .string()
      .email('メールアドレスの形式が正しくありません')
      .or(z.literal('')),
    phone: z
      .string()
      .regex(/^\d+$/, '電話番号は数字のみで入力してください')
      .or(z.literal('')),
    area: z.enum(['ehime', 'kochi', 'other']),
    city: z.string(),
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

export type Schema = z.infer<typeof schema>
