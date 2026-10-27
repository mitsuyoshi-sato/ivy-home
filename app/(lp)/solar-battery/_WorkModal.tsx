import { _WorkModalShell } from './_Client/_WorkModalShell'
import { _WorkDetail } from './_WorkDetail'
import { type Work, data } from './works'

export const _WorkModal = (props: { item: Work }) => {
  const indexItem = data.findIndex((w) => w.slug === props.item.slug)

  return (
    <_WorkModalShell
      itemNext={data[indexItem + 1] ?? null}
      itemPrevious={data[indexItem - 1] ?? null}
    >
      <_WorkDetail item={props.item} heading="h2" />
    </_WorkModalShell>
  )
}
