'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

export interface ToastProps {
  id: string
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  onClose: (id: string) => void
}

export function Toast({ id, message, type = 'success', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // 进入动画
    const timer = setTimeout(() => setIsVisible(true), 50)
    
    // 自动关闭
    const closeTimer = setTimeout(() => {
      setIsLeaving(true)
      setTimeout(() => onClose(id), 300)
    }, duration)

    return () => {
      clearTimeout(timer)
      clearTimeout(closeTimer)
    }
  }, [id, duration, onClose, mounted])

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white border-green-600'
      case 'error':
        return 'bg-red-500 text-white border-red-600'
      case 'warning':
        return 'bg-yellow-500 text-white border-yellow-600'
      case 'info':
        return 'bg-blue-500 text-white border-blue-600'
      default:
        return 'bg-green-500 text-white border-green-600'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓'
      case 'error':
        return '✕'
      case 'warning':
        return '⚠'
      case 'info':
        return 'ℹ'
      default:
        return '✓'
    }
  }

  if (!mounted) return null

  return createPortal(
    <div
      className={cn(
        'fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border',
        'transform transition-all duration-300 ease-in-out min-w-[280px] max-w-[400px]',
        getTypeStyles(),
        isVisible && !isLeaving ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      )}
    >
      <span className="text-lg font-semibold">{getIcon()}</span>
      <span className="flex-1 font-medium text-sm">{message}</span>
      <button
        onClick={() => {
          setIsLeaving(true)
          setTimeout(() => onClose(id), 300)
        }}
        className="ml-2 text-white/80 hover:text-white transition-colors text-lg leading-none"
        aria-label="关闭"
      >
        ×
      </button>
    </div>,
    document.body
  )
}
