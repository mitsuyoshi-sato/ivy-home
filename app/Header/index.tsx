import { Nav } from './Nav'
import { Leaf } from 'lucide-react'

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-[20px] z-50 w-[95%] mx-auto">
      <nav className="px-4 py-2 fixed left-1/2 top-0 z-50 mt-4 w-[95%] -translate-x-1/2 rounded-full border border-white/30 bg-white/40 shadow-lg shadow-white/20 backdrop-blur-md backdrop-saturate-150">
        <div className="flex items-center justify-between">
          <img
            src="/ivy-logo.svg"
            alt="logo"
            className="w-[100px] -translate-y-[5px]"
          />
          <Nav />
        </div>
      </nav>
    </header>
  )
}
