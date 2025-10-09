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
  Leaf,
  Droplet,
  Footprints,
  Newspaper,
  ArrowLeft,
} from 'lucide-react'

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
  idea: Lightbulb,
  info: Info,
  layers: Layers3,
  leaf: Leaf,
  lightbulb: Lightbulb,
  newspaper: Newspaper,
  paintbrush: Paintbrush,
  plugZap: PlugZap,
  sprayCan: SprayCan,
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
