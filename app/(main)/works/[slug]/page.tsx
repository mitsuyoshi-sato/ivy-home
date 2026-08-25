import type { ContentPageProps } from '../../_Contents/ContentDetail'
import {
  ContentDetail,
  getContentMetadata,
  getContentStaticParams,
} from '../../_Contents/ContentDetail'

export const generateMetadata = (props: ContentPageProps) =>
  getContentMetadata('work', props.params)

export const generateStaticParams = () => getContentStaticParams('work')

const Page = (props: ContentPageProps) => (
  <ContentDetail kind="work" params={props.params} />
)

export default Page
