import type { ContentPageProps } from '../../ContentDetail'
import {
  ContentDetail,
  getContentMetadata,
  getContentStaticParams,
} from '../../ContentDetail'

export const generateMetadata = (props: ContentPageProps) =>
  getContentMetadata('work', props.params)

export const generateStaticParams = () => getContentStaticParams('work')

const Page = (props: ContentPageProps) => (
  <ContentDetail kind="work" params={props.params} />
)

export default Page
