'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import {
  Lightbulb,
  Building2,
  Info,
  Layers3,
  Star,
  Circle,
  Paintbrush,
  Sun,
  Droplets,
  BatteryCharging,
  Bath,
  PlugZap,
  Briefcase,
  FileText,
  ChartNoAxesCombined,
  Handshake,
  BellRing,
  Home,
  SprayCan,
  ChevronDown,
} from 'lucide-react'

const iconMap: Record<
  string,
  React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      size?: string | number
    }
  >
> = {
  lightbulb: Lightbulb,
  idea: Lightbulb,
  building: Building2,
  info: Info,
  layers: Layers3,
  star: Star,
  sun: Sun,
  battery: BatteryCharging,
  droplets: Droplets,
  bath: Bath,
  plugZap: PlugZap,
  paintbrush: Paintbrush,
  briefcase: Briefcase,
  fileText: FileText,
  chartNoAxesCombined: ChartNoAxesCombined,
  handshake: Handshake,
  bellRing: BellRing,
  sprayCan: SprayCan,
  home: Home,
  chevronDown: ChevronDown,
}

export const Icon = forwardRef<
  SVGSVGElement,
  {
    name: string
    className?: string
    size?: number | string
  }
>((props, ref) => {
  const Comp = iconMap[props.name] ?? Circle
  return (
    <Comp
      ref={ref}
      className={cn(!props.size && 'w-4 h-4', props.className)}
      size={props.size}
    />
  )
})

Icon.displayName = 'Icon'
