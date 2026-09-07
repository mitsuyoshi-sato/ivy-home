'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export const _ContactForm = () => {
  const [stateContactMethod, setContactMethod] = useState<'email' | 'phone'>(
    'phone',
  )

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <p className="mb-6 text-xs leading-relaxed text-dark4">
        <span className="sr-only">アスタリスク</span>
        <span aria-hidden="true" className="mr-1 font-semibold text-red-600">
          *
        </span>
        は必須項目です
      </p>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-7">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <label className={__style.label} htmlFor="contact-name">
              お名前
            </label>
            <__RequiredMark />
          </div>
          <p className={__style.note}>姓のみでも構いません</p>
          <input
            id="contact-name"
            aria-required="true"
            autoComplete="name"
            className={__style.input}
            name="name"
            placeholder="山田"
            type="text"
          />
        </div>

        <fieldset>
          <legend className="flex flex-wrap items-center gap-2">
            <span className={__style.label}>ご希望の連絡方法</span>
            <__RequiredMark />
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {__optionsContactMethod.map((o) => (
              <__RadioOption
                key={o.value}
                checked={stateContactMethod === o.value}
                id={`contact-method-${o.value}`}
                label={o.label}
                name="contactMethod"
                value={o.value}
                onChange={() => {
                  setContactMethod(o.value)
                }}
              />
            ))}
          </div>

          <div aria-live="polite" className="mt-4">
            {stateContactMethod === 'phone' && (
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <label className={__style.subLabel} htmlFor="contact-phone">
                    電話番号
                  </label>
                  <__RequiredMark />
                </div>
                <input
                  id="contact-phone"
                  aria-required="true"
                  autoComplete="tel"
                  className={__style.input}
                  inputMode="tel"
                  name="phone"
                  placeholder="090-1234-5678"
                  type="tel"
                />
              </div>
            )}
            {stateContactMethod === 'email' && (
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <label className={__style.subLabel} htmlFor="contact-email">
                    メールアドレス
                  </label>
                  <__RequiredMark />
                </div>
                <input
                  id="contact-email"
                  aria-required="true"
                  autoComplete="email"
                  className={__style.input}
                  inputMode="email"
                  name="email"
                  placeholder="example@example.com"
                  type="email"
                />
              </div>
            )}
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex flex-wrap items-center gap-2">
            <span className={__style.label}>お住まいの地域</span>
            <__RequiredMark />
          </legend>
          <div className="mt-3 grid gap-3 min-[430px]:grid-cols-3">
            {__optionsArea.map((o) => (
              <__RadioOption
                key={o.value}
                id={`contact-area-${o.value}`}
                label={o.label}
                name="area"
                value={o.value}
              />
            ))}
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-2">
              <label className={__style.subLabel} htmlFor="contact-city">
                市区町村
              </label>
              <__OptionalMark />
            </div>
            <input
              id="contact-city"
              autoComplete="address-level2"
              className={__style.input}
              name="city"
              placeholder="松山市"
              type="text"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex flex-wrap items-center gap-2">
            <span className={__style.label}>ご相談内容</span>
            <__RequiredMark />
          </legend>
          <div className="mt-3 grid gap-3 min-[430px]:grid-cols-2">
            {__optionsConsultation.map((o) => (
              <__RadioOption
                key={o.value}
                id={`contact-consultation-${o.value}`}
                label={o.label}
                name="consultation"
                value={o.value}
              />
            ))}
          </div>
        </fieldset>

        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-2">
            <label className={__style.label} htmlFor="contact-message">
              ご質問・ご要望
            </label>
            <__OptionalMark />
          </div>
          <textarea
            id="contact-message"
            className={cn(__style.input, 'min-h-36 py-4 leading-7')}
            name="message"
            placeholder="電気代が高く、蓄電池を検討しています"
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
        type="button"
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

const __RadioOption = (props: {
  checked?: boolean
  id: string
  label: string
  name: string
  value: string
  onChange?: () => void
}) => {
  return (
    <div className="relative">
      <input
        id={props.id}
        checked={props.checked}
        className="peer sr-only"
        name={props.name}
        type="radio"
        value={props.value}
        onChange={props.onChange}
      />
      <label
        className="flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border border-[#dfe3dc] bg-white px-4 py-3 text-sm font-semibold text-dark7 transition-[border-color,background-color,color,box-shadow] hover:border-ivy6/60 peer-checked:border-ivy7 peer-checked:bg-[#f2f7f3] peer-checked:text-ivy7 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ivy6 peer-checked:[&_[data-radio-circle]]:border-ivy7 peer-checked:[&_[data-radio-dot]]:scale-100"
        htmlFor={props.id}
      >
        <span
          className="flex size-5 shrink-0 items-center justify-center rounded-full border border-dark3 transition-colors"
          data-radio-circle
        >
          <span
            className="size-2.5 scale-0 rounded-full bg-ivy7 transition-transform"
            data-radio-dot
          />
        </span>
        <span>{props.label}</span>
      </label>
    </div>
  )
}

const __style = {
  input:
    'mt-3 min-h-14 w-full rounded-lg border border-[#dfe3dc] bg-white px-4 py-3 text-base text-dark8 shadow-[0_4px_14px_rgba(21,50,35,0.04)] transition-[border-color,box-shadow] placeholder:text-dark2 focus:border-ivy6 focus:shadow-[0_0_0_3px_rgba(26,101,62,0.1)] focus-visible:outline-none',
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
  { label: '太陽光・蓄電池の両方', value: 'solar-battery' },
  { label: 'その他', value: 'other' },
] as const
