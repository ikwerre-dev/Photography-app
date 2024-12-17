import { Twitter, Instagram, Facebook } from 'lucide-react'

export default function SocialLinks() {
  const socialLinks = [
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Facebook, href: '#', label: 'Facebook' }
  ]

  return (
    <div className="fixed left-2 md:left-6 bottom-4 md:bottom-6 z-40 flex flex-col space-y-4 md:space-y-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-beige hover:text-white transition-colors duration-200 transform hover:scale-110"
        >
          <Icon size={16} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  )
}

