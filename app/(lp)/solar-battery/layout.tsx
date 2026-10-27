import type { ReactNode } from 'react'

import { _Footer } from './_Footer'
import { _Header } from './_Header'

const Layout = (props: { children: ReactNode; modal: ReactNode }) => {
  return (
    <>
      <_Header />
      <main>{props.children}</main>
      <_Footer />
      {props.modal}
    </>
  )
}

export default Layout
