import { Nav } from './Nav'

export const Header = (props: {
  items: {
    href: string
    label: string
    subs?: { href: string; label: string; icon?: string }[]
  }[]
}) => {
  return (
    <header className="fixed left-0 right-0 top-[20px] z-50 w-[95%] mx-auto">
      <nav className="px-4 py-2 fixed left-1/2 top-0 z-50 mt-4 w-[95%] -translate-x-1/2 rounded-full border border-white/30 bg-white/40 shadow-lg shadow-white/20 backdrop-blur-md backdrop-saturate-150">
        <div className="flex items-center justify-between pl-2">
          <img src="/ivy-home.svg" alt="logo" className="w-[120px]" />
          <Nav items={props.items} />
        </div>
      </nav>
    </header>
  )
}
