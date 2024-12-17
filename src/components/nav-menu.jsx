import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'STUDIOS', href: '/studios' },
    { name: 'CONTACT', href: '/contact' }
  ]

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className=" text-[#ccc]  hover:text-white transition-colors duration-200 text-sm tracking-wider"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-beige hover:text-white transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full right-0 w-screen h-screen bg-teal-800/95 z-50 md:hidden">
          <nav className="p-6">
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-beige hover:text-white transition-colors duration-200 text-lg tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

