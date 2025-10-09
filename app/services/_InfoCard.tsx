'use client'

export const _InfoCard = (props: {
  image?: string
  alt?: string
  title: string
  description?: string
}) => {
  return (
    <div className="flex w-full flex-col">
      {props.image && (
        <div className="h-60 w-full overflow-hidden rounded-sm border border-gray-300">
          <img
            alt={props.alt}
            className="size-full object-cover"
            src={props.image}
          />
        </div>
      )}
      <div>
        <h3 className={`text-lg font-bold ${props.image ? 'mt-4' : ''}`}>
          {props.title}
        </h3>
        {props.description && (
          <p className="mt-2 whitespace-pre-line text-sm leading-[1.8] text-gray-800">
            {props.description}
          </p>
        )}
      </div>
    </div>
  )
}
