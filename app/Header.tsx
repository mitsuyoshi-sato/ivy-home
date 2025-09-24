import { Nav } from './Nav'
import { Leaf } from 'lucide-react'

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b bg-white shadow-lg">
      <nav className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xl font-bold">
            <Leaf
              size={24}
              className="-translate-y-[10px] translate-x-[10px] text-green-800"
              fill="#86EFAC"
            />
            <div>Ivy Home</div>
          </div>
          <Nav />
        </div>
      </nav>
    </header>
  )
}
