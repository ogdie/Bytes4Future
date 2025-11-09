import Link from 'next/link'
import { useRouter } from 'next/router'

// ÍCONES:
import { FaHome } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { CgProfile } from 'react-icons/cg'

export default function Navbar() {
  const router = useRouter()
  const isActive = (path) => router.pathname === path

  const navItems = [
    { href: '/home', icon: <FaHome size={22} />, label: 'Home' },
    { href: '/calendar', icon: <SlCalender size={22} />, label: 'Calendário' },
    { href: '/perfil', icon: <CgProfile size={22} />, label: 'Perfil' },
  ]

  return (
    <nav
      className="
    fixed bottom-4 left-1/2 -translate-x-1/2
    z-[9999] pointer-events-auto
    bg-gray-200 backdrop-blur-md
    border border-gray-200 shadow-lg rounded-2xl
    flex justify-around items-center
    w-[90%] max-w-md py-2 px-2 isolate
  "
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`
      relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl
      transition-all duration-300
      ${isActive(item.href)
              ? 'text-[#FF7043] bg-[#FFF3ED]'
              : 'text-[#37474F] hover:text-[#AEEA00] hover:bg-gray-100'
            }
    `}
        >
          {item.icon}
          <span className="text-xs font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}