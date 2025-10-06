'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
const images = [
  '/assets/images/preview/shiro.png',
  '/assets/images/preview/kami.png',
  '/assets/images/preview/console.png',
]
const imageNames = ['Shiro 主题', 'Kami 主题', '控制台']
import { cn } from 'utils/cn'
import { buttonVariants } from 'app/components/ui/button'
import { LuCirclePlay } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // 自动轮播功能
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 5000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  return (
    <div className="container relative z-[2] flex flex-col overflow-hidden rounded-lg bg-background px-6 pt-12 max-md:text-center md:px-12 md:pt-16">
      <div className="md:flex md:items-center md:gap-8 mb-8">
        <div className="flex-shrink-0 md:w-2/5">
          <Image
            src="/logo.png"
            alt="Mix Space Logo"
            width={400}
            height={133}
            className="max-w-full h-auto max-md:mx-auto"
            priority
          />
        </div>
        <div className="md:flex md:flex-col md:gap-4">
          <p className="text-muted-foreground md:text-xl max-md:mt-4">
            Mix Space
            是一个现代化的前后端分离个人空间解决方案，也可以作为个人博客使用。
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-2 mb-4">
            <Link
              href="/docs/core"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  className: 'rounded-full min-w-[140px] justify-center',
                }),
              )}
            >
              <LuCirclePlay className="size-4 mr-2" /> 开始使用
            </Link>
            <a
              href="https://github.com/mx-space"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'outline',
                  className:
                    'rounded-full bg-background min-w-[140px] justify-center',
                }),
              )}
            >
              <FaGithub className="size-4 mr-2" /> Github
            </a>
          </div>
        </div>
      </div>

      <div
        className="relative mt-6 md:mt-8 mb-12 overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full overflow-visible">
          <div className="w-full mx-auto overflow-hidden rounded-xl">
            <div className="relative aspect-video w-full bg-gradient-to-br from-secondary/20 to-secondary/10">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage]}
                    alt={imageNames[currentImage]}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    quality={90}
                    priority={currentImage === 0}
                    className="object-cover w-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-3 md:bottom-[calc(var(--spacing)*4)] left-1/2 -translate-x-1/2 z-[2] flex flex-row border border-[var(--color-fd-border)] rounded-full bg-[var(--color-fd-card)] p-0.5 md:p-1 shadow-md shadow-[var(--color-fd-background)] overflow-x-auto max-w-[calc(100%-2rem)] no-scrollbar">
            {imageNames.map((name, index) => (
              <button
                key={`title-${index}`}
                onClick={() => setCurrentImage(index)}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  index === currentImage
                    ? 'bg-[var(--color-fd-accent)] text-[var(--color-fd-accent-foreground)]'
                    : 'text-[var(--color-fd-muted-foreground)] hover:bg-[var(--color-fd-secondary)] hover:text-[var(--color-fd-secondary-foreground)]'
                }`}
                aria-label={`查看${name}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
