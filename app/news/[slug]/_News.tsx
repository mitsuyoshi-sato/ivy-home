import { News } from '@/app/data/newsData'
import { SectionHeader } from '@/components/Section'
import { format } from 'date-fns'

export const _News = (props: { data: News }) => {
  return (
    <div className="wrapper">
      <div className="flex items-center gap-12">
        <div className="w-[40%]">
          <SectionHeader
            title={props.data.title}
            subtitle={props.data.category}
            // description={props.data.subtitle}
            description=""
          />
          <div className="flex items-center justify-end gap-2 mt-4">
            <div className="text-sm">
              {format(props.data.publishedAt, 'yyyy.MM.dd')}
            </div>
            <div className="text-gray-500 text-sm">created by</div>
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img
                src={props.data.createdByImage}
                alt={props.data.createdByJp}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-bold">{props.data.createdByJp}</p>
          </div>
        </div>
        <div className="w-[60%] rounded-lg overflow-hidden">
          <img
            src={props.data.image}
            alt={props.data.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
