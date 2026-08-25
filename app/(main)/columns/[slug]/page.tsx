import type { ContentPageProps } from '../../_Contents/ContentDetail'
import {
  ContentDetail,
  getContentMetadata,
  getContentStaticParams,
} from '../../_Contents/ContentDetail'

export const generateMetadata = (props: ContentPageProps) =>
  getContentMetadata('column', props.params)

export const generateStaticParams = () => getContentStaticParams('column')

const Page = (props: ContentPageProps) => (
  <ContentDetail kind="column" params={props.params} />
)

export default Page
