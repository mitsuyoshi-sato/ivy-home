import type { ReactNode } from 'react'

import { _WorkModalShell } from '../../_Client/_WorkModalShell'

const Layout = (props: { children: ReactNode }) => (
  <_WorkModalShell>{props.children}</_WorkModalShell>
)

export default Layout
