import type { ContentPageProps } from '../../ContentDetail'
import {
  ContentDetail,
  getContentMetadata,
  getContentStaticParams,
} from '../../ContentDetail'

export const generateMetadata = (props: ContentPageProps) =>
  getContentMetadata('news', props.params)

export const generateStaticParams = () => getContentStaticParams('news')

const Page = (props: ContentPageProps) => (
  <ContentDetail kind="news" params={props.params} />
)

export default Page
