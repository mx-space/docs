'use client'

import { useCallback } from 'react'
import { useToast } from '@/contexts/toast-context'

export function useCopy() {
  const { showSuccess, showError } = useToast()

  const copyToClipboard = useCallback(async (text: string, successMessage?: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // 使用现代 Clipboard API
        await navigator.clipboard.writeText(text)
      } else {
        // 兼容旧版浏览器
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)
        
        if (!successful) {
          throw new Error('复制失败')
        }
      }
      
      showSuccess(successMessage || '复制成功！')
      return true
    } catch (error) {
      console.error('复制失败:', error)
      showError('复制失败，请重试')
      return false
    }
  }, [showSuccess, showError])

  return { copyToClipboard }
}
