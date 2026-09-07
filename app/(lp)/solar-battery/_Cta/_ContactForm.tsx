'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { UseFormRegisterReturn } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema, Schema } from './schema'

export const _ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Schema>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      contactMethod: 'phone',
      phone: '',
      email: '',
      area: 'ehime',
      city: '',
      consultationType: 'solar',
      message: '',
    },
  })
  const contactMethod = watch('contactMethod')

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-7">
        <div className="flex h-full flex-col gap-5 lg:contents">
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="flex flex-wrap items-center gap-2">
              <label className={__style.label} htmlFor="contact-name">
                お名前
              </label>
              <__RequiredMark />
              <span className="ml-1 text-xs font-normal leading-none text-dark4">
                姓のみでも構いません
              </span>
            </div>
            <input
              id="contact-name"
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              aria-invalid={!!errors.name}
              aria-required="true"
              autoComplete="name"
              className={cn(__style.input, errors.name && __style.inputError)}
              placeholder="山田　太郎"
              type="text"
              {...register('name')}
            />
            <__ErrorMessage
              id="contact-name-error"
              message={errors.name?.message}
            />
          </div>

          <fieldset className="lg:col-start-1 lg:row-start-2">
            <legend className="flex flex-wrap items-center gap-2">
              <span className={__style.label}>ご希望の連絡方法</span>
              <__RequiredMark />
            </legend>
            <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2">
              {__optionsContactMethod.map((o) => (
                <__RadioOption
                  key={o.value}
                  id={`contact-method-${o.value}`}
                  label={o.label}
                  value={o.value}
                  {...register('contactMethod')}
                />
              ))}
            </div>
            <__ErrorMessage
              id="contact-method-error"
              message={errors.contactMethod?.message}
            />

            <div aria-live="polite" className="mt-4">
              {contactMethod === 'phone' && (
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <label className={__style.subLabel} htmlFor="contact-phone">
                      電話番号
                    </label>
                    <__RequiredMark />
                    <span className="ml-1 text-xs font-normal leading-none text-dark4">
                      ハイフンなしで入力してください
                    </span>
                  </div>
                  <input
                    id="contact-phone"
                    aria-describedby={
                      errors.phone ? 'contact-phone-error' : undefined
                    }
                    aria-invalid={!!errors.phone}
                    aria-required="true"
                    autoComplete="tel"
                    className={cn(
                      __style.input,
                      errors.phone && __style.inputError,
                    )}
                    inputMode="tel"
                    placeholder="09012345678"
                    type="tel"
                    {...register('phone')}
                  />
                  <__ErrorMessage
                    id="contact-phone-error"
                    message={errors.phone?.message}
                  />
                </div>
              )}
              {contactMethod === 'email' && (
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <label className={__style.subLabel} htmlFor="contact-email">
                      メールアドレス
                    </label>
                    <__RequiredMark />
                  </div>
                  <input
                    id="contact-email"
                    aria-describedby={
                      errors.email ? 'contact-email-error' : undefined
                    }
                    aria-invalid={!!errors.email}
                    aria-required="true"
                    autoComplete="email"
                    className={cn(
                      __style.input,
                      errors.email && __style.inputError,
                    )}
                    inputMode="email"
                    placeholder="example@example.com"
                    type="email"
                    {...register('email')}
                  />
                  <__ErrorMessage
                    id="contact-email-error"
                    message={errors.email?.message}
                  />
                </div>
              )}
            </div>
          </fieldset>
        </div>

        <div className="flex h-full flex-col gap-8 lg:contents">
          <fieldset className="lg:col-start-2 lg:row-start-2">
            <legend className="flex flex-wrap items-center gap-2">
              <span className={__style.label}>お住まいの地域</span>
              <__RequiredMark />
            </legend>
            <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2">
              {__optionsArea.map((o) => (
                <__RadioOption
                  key={o.value}
                  id={`contact-area-${o.value}`}
                  label={o.label}
                  value={o.value}
                  {...register('area')}
                />
              ))}
            </div>
            <__ErrorMessage
              id="contact-area-error"
              message={errors.area?.message}
            />
            <div className="mt-4">
              <div className="flex flex-wrap items-center gap-2">
                <label className={__style.subLabel} htmlFor="contact-city">
                  市区町村
                </label>
                <__OptionalMark />
              </div>
              <input
                id="contact-city"
                aria-describedby={
                  errors.city ? 'contact-city-error' : undefined
                }
                aria-invalid={!!errors.city}
                autoComplete="address-level2"
                className={cn(__style.input, errors.city && __style.inputError)}
                placeholder="松山市"
                type="text"
                {...register('city')}
              />
              <__ErrorMessage
                id="contact-city-error"
                message={errors.city?.message}
              />
            </div>
          </fieldset>

          <fieldset className="lg:col-start-2 lg:row-start-1">
            <legend className="flex flex-wrap items-center gap-2">
              <span className={__style.label}>ご相談内容</span>
              <__RequiredMark />
            </legend>
            <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2">
              {__optionsConsultation.map((o) => (
                <__RadioOption
                  key={o.value}
                  id={`contact-consultation-${o.value}`}
                  label={o.label}
                  value={o.value}
                  {...register('consultationType')}
                />
              ))}
            </div>
            <__ErrorMessage
              id="contact-consultation-error"
              message={errors.consultationType?.message}
            />
          </fieldset>
        </div>

        <div className="lg:col-span-2 lg:row-start-3">
          <div className="flex flex-wrap items-center gap-2">
            <label className={__style.label} htmlFor="contact-message">
              ご質問・ご要望
            </label>
            <__OptionalMark />
          </div>
          <textarea
            id="contact-message"
            aria-describedby={
              errors.message ? 'contact-message-error' : undefined
            }
            aria-invalid={!!errors.message}
            className={cn(
              __style.input,
              'min-h-36 py-4 leading-7',
              errors.message && __style.inputError,
            )}
            placeholder="電気代が高く、蓄電池を検討しています"
            {...register('message')}
          />
          <__ErrorMessage
            id="contact-message-error"
            message={errors.message?.message}
          />
        </div>
      </div>

      <p className="mt-8 text-xs leading-6 text-dark5 sm:text-sm">
        送信することで、
        <Link
          className="font-semibold text-ivy7 underline decoration-ivy7/40 underline-offset-4 transition-colors hover:text-ivy6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6"
          href="/privacy"
        >
          プライバシーポリシー
        </Link>
        に同意したものとします。
      </p>

      <button
        className="group mt-5 inline-flex min-h-16 w-full items-center justify-center rounded-md border border-ivy8 bg-ivy8 px-5 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-ivy7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivy6 sm:text-base"
        type="submit"
      >
        無料で相談する
        <ArrowRight
          aria-hidden="true"
          className="ml-4 size-5 transition-transform group-hover:translate-x-1"
        />
      </button>
    </form>
  )
}

const __RequiredMark = () => {
  return (
    <>
      <span
        aria-hidden="true"
        className="text-sm font-semibold leading-none text-red-600"
      >
        *
      </span>
      <span className="sr-only">必須</span>
    </>
  )
}

const __OptionalMark = () => {
  return (
    <span className="text-xs font-normal leading-none text-dark4">
      （任意）
    </span>
  )
}

const __ErrorMessage = (props: { id: string; message?: string }) => {
  return (
    <p
      id={props.id}
      aria-live="polite"
      className="mt-0.5 min-h-[1lh] text-xs leading-relaxed text-red-600"
      role={props.message ? 'alert' : undefined}
    >
      {props.message}
    </p>
  )
}

const __RadioOption = (
  props: {
    id: string
    label: string
    value: string
  } & UseFormRegisterReturn,
) => {
  const { id, label, ...inputProps } = props

  return (
    <label
      className="inline-flex min-h-11 cursor-pointer items-center gap-2 whitespace-nowrap py-2 text-sm font-semibold text-dark7 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ivy6 hover:text-ivy7"
      htmlFor={id}
    >
      <input
        id={id}
        className="size-5 shrink-0 accent-ivy7"
        style={{ appearance: 'auto' }}
        type="radio"
        {...inputProps}
      />
      <span>{label}</span>
    </label>
  )
}

const __style = {
  input:
    'mt-3 min-h-14 w-full rounded-lg !border !border-solid !border-ivy6/50 bg-white px-4 py-3 text-base text-dark8 shadow-[0_4px_14px_rgba(21,50,35,0.04)] transition-[border-color,box-shadow] placeholder:text-dark2 focus:!border-ivy6 focus:shadow-[0_0_0_3px_rgba(26,101,62,0.1)] focus-visible:outline-none',
  inputError:
    '!border-red-600 focus:!border-red-600 focus:shadow-[0_0_0_3px_rgba(220,38,38,0.12)]',
  label: 'text-sm font-semibold text-dark8 sm:text-base',
  note: 'mt-2 text-xs leading-relaxed text-dark4',
  subLabel: 'text-xs font-semibold text-dark6 sm:text-sm',
} as const

const __optionsContactMethod = [
  { label: '電話', value: 'phone' },
  { label: 'メール', value: 'email' },
] as const

const __optionsArea = [
  { label: '愛媛県', value: 'ehime' },
  { label: '高知県', value: 'kochi' },
  { label: 'その他', value: 'other' },
] as const

const __optionsConsultation = [
  { label: '太陽光', value: 'solar' },
  { label: '蓄電池', value: 'battery' },
  { label: '太陽光・蓄電池の両方', value: 'both' },
  { label: 'その他', value: 'other' },
] as const
