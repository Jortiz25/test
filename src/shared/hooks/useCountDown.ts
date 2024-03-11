import { useState, useEffect } from 'react'

interface CountdownProps {
  direction: number
  onComplete: () => void
}

const useCountdown = ({ onComplete }: CountdownProps) => {
  const [countdown, setCountdown] = useState<number>(90)

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem('countdown', String(countdown))
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    if (countdown === 0) {
      clearInterval(interval)
      localStorage.removeItem('countdown')
      onComplete()
    }

    return () => clearInterval(interval)
  }, [countdown, onComplete])

  return countdown
}

export default useCountdown
