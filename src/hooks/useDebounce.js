import { useEffect, useRef } from 'react'

export function useDebounce(callback, delay) {
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const debounceCallBack = (...arg) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      callback(...arg)
    }, delay)
  }

  return debounceCallBack
}
