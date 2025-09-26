'use client'

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
}

export const Icon = (props: {
  name: string
  className?: string
  size?: number | string
}) => {
  const Comp = iconMap[props.name] ?? Circle
  return (
    <Comp
      className={cn(!props.size && 'w-4 h-4', props.className)}
      size={props.size}
    />
  )
}
