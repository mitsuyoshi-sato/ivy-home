import { Nav } from './Nav'
import { Leaf } from 'lucide-react'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b w-full">
      <nav className="py-4 px-4 w-full">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold flex items-center">
            <Leaf
              size={24}
              className="text-green-800 translate-x-[10px] -translate-y-[10px]"
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
