'use client'

import {
  ArrowLeft,
  Bath,
  BatteryCharging,
  BellRing,
  BookOpenText,
  Briefcase,
  Building2,
  ChartNoAxesCombined,
  ChevronDown,
  Circle,
  Droplet,
  Droplets,
  FileText,
  Footprints,
  Handshake,
  Home,
  HousePlug,
  Info,
  Layers3,
  Leaf,
  Lightbulb,
  Newspaper,
  Paintbrush,
  PlugZap,
  SprayCan,
  Sprout,
  Star,
  Sun,
} from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const iconMap: Record<
  string,
  React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      size?: string | number
    }
  >
> = {
  arrowLeft: ArrowLeft,
  bath: Bath,
  battery: BatteryCharging,
  bellRing: BellRing,
  bookOpenText: BookOpenText,
  briefcase: Briefcase,
  building: Building2,
  chartNoAxesCombined: ChartNoAxesCombined,
  chevronDown: ChevronDown,
  droplet: Droplet,
  droplets: Droplets,
  fileText: FileText,
  footprints: Footprints,
  handshake: Handshake,
  home: Home,
  housePlug: HousePlug,
  idea: Lightbulb,
  info: Info,
  layers: Layers3,
  leaf: Leaf,
  lightbulb: Lightbulb,
  newspaper: Newspaper,
  paintbrush: Paintbrush,
  plugZap: PlugZap,
  sprayCan: SprayCan,
  sprout: Sprout,
  star: Star,
  sun: Sun,
}

export const Icon = forwardRef<
  SVGSVGElement,
  {
    className?: string
    fill?: string
    name: string
    size?: number | string
    stroke?: string
    style?: React.CSSProperties
  }
>((props, ref) => {
  const Comp = iconMap[props.name] ?? Circle
  return (
    <Comp
      ref={ref}
      className={cn(props.className)}
      fill={props.fill ?? 'none'}
      size={props.size ?? '16'}
      stroke={props.stroke ?? 'currentColor'}
      style={props.style}
    />
  )
})

Icon.displayName = 'Icon'
