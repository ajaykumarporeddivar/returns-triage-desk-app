'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useLocalStorage<T>(key: string, initial: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(() => {
    // SSR-safe: During initial render, localStorage is not available.
    if (typeof window === 'undefined') {
      return initial
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initial
    } catch (error) {
      console.error('Error reading localStorage key “%s”: %o', key, error)
      return initial
    }
  })

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error writing to localStorage key “%s”: %o', key, error)
    }
  }, [key, value])

  return [value, setValue]
}

export function useFilter<T extends Record<string, unknown>>(
  items: T[],
  fields: (keyof T)[]
): {
  filtered: T[]
  search: string
  setSearch: (s: string) => void
  status: string
  setStatus: (s: string) => void
} {
  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const filtered = React.useMemo(() => {
    let tempItems = items

    // Apply search filter
    if (search) {
      const lowercasedSearch = search.toLowerCase()
      tempItems = tempItems.filter(item =>
        fields.some(field => {
          const value = item[field]
          if (typeof value === 'string' || typeof value === 'number') {
            return String(value).toLowerCase().includes(lowercasedSearch)
          }
          return false
        })
      )
    }

    // Apply status filter
    if (status && status !== 'All') {
      tempItems = tempItems.filter(item => {
        const itemStatus = item.status
        return typeof itemStatus === 'string' && itemStatus.toLowerCase() === status.toLowerCase()
      })
    }

    return tempItems
  }, [items, fields, search, status])

  return { filtered, search, setSearch, status, setStatus }
}

export function useModal<T = unknown>(): {
  isOpen: boolean
  open: (item?: T) => void
  close: () => void
  activeItem: T | null
} {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<T | null>(null)

  const open = useCallback((item?: T) => {
    setActiveItem(item ?? null)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setActiveItem(null)
  }, [])

  return { isOpen, open, close, activeItem }
}

export function useDemoToast(): {
  message: string
  type: 'success' | 'error' | 'info'
  visible: boolean
  show: (msg: string, type?: 'success' | 'error' | 'info') => void
} {
  const [message, setMessage] = useState('')
  const [type, setType] = useState<'success' | 'error' | 'info'>('info')
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const show = useCallback((msg: string, toastType: 'success' | 'error' | 'info' = 'info') => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setMessage(msg)
    setType(toastType)
    setVisible(true)
    timerRef.current = setTimeout(() => {
      setVisible(false)
      setMessage('')
    }, 2500) // Auto-hide after 2.5 seconds
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return { message, type, visible, show }
}