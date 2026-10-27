import { _WorkModalShell } from './_Client/_WorkModalShell'
import { _WorkDetail } from './_WorkDetail'
import type { Work } from './works'

export const _WorkModal = (props: { item: Work }) => (
  <_WorkModalShell>
    <_WorkDetail item={props.item} heading="h2" />
  </_WorkModalShell>
)
