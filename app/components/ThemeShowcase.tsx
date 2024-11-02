'use client'

import React from 'react'
import Image from 'next/image'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { GitHub } from 'react-feather'

interface ThemeProps {
  title: string
  preview: string
  href: string
  github: string
}

const ThemeCard = ({ title, preview, href, github }: ThemeProps) => {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-10">
        <a 
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <GitHub size={16} />
        </a>
      </div>
      <Card 
        title={title}
        href={href}
        className="overflow-hidden"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-white dark:bg-neutral-800">
          <Image
            src={preview}
            alt={`${title} 预览图`}
            fill
            className="object-scale-down"
            style={{ transform: 'translateY(-30px)' }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw"
          />
        </div>
      </Card>
    </div>
  )
}

const ThemeShowcase: React.FC = () => {
  const themes = [
    {
      title: 'Shiro (@innei)',
      preview: '/assets/images/preview/shiro.png',
      href: '/docs/themes/shiro/deploy',
      github: 'https://github.com/innei/shiro'
    },
    {
      title: 'Kami (@innei)',
      preview: '/assets/images/preview/kami.png',
      href: '/docs/themes/kami',
      github: 'https://github.com/mx-space/kami'
    },
    {
      title: 'Yun (@innei)',
      preview: '/assets/images/preview/yun.png',
      href: '/docs/themes/yun',
      github: 'https://github.com/mx-space/mx-web-yun'
    }
  ]

  return (
    <Cards>
      {themes.map((theme) => (
        <ThemeCard key={theme.title} {...theme} />
      ))}
    </Cards>
  )
}

export default ThemeShowcase 