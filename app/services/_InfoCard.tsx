'use client'

export const _InfoCard = (props: {
  image?: string
  alt?: string
  title: string
  description?: string
}) => {
  return (
    <div className="w-full flex flex-col">
      {props.image && (
        <div className="w-full h-full border border-gray-300 rounded-sm overflow-hidden">
          <img src={props.image} alt={props.alt} className="w-full h-full" />
        </div>
      )}
      <div>
        <h3 className={`text-lg font-bold ${props.image ? 'mt-4' : ''}`}>
          {props.title}
        </h3>
        {props.description && (
          <p className="text-sm text-gray-800 mt-2 leading-[1.8] whitespace-pre-line">
            {props.description}
          </p>
        )}
      </div>
    </div>
  )
}
