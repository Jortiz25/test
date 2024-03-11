import { useEffect, useRef } from 'react'
import './count-down-loader.style.css'
import { Typography } from '../typography'

const duration = 90

function CountDownLoader({ count }: { count: number }) {
  const circle = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const animateCircle = () => {
      if (circle.current) {
        circle.current.style.animation = `count_donw-curcle ${duration + 32}s linear forwards`
      }
    }
    animateCircle()
  }, [])

  return (
    <section className="count-down__container">
      <Typography
        variant="paragraph"
        size="xl"
        className="text-center count-down__value"
      >
        {count}
      </Typography>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 124 124"
      >
        <circle
          className="circle-loading"
          cx="62"
          cy="62"
          r="45"
          fill="none"
          strokeWidth="10px"
        ></circle>
        <circle
          ref={circle}
          className="count-down-loading__circle"
          cx="62"
          cy="62"
          r="45"
          fill="none"
          strokeWidth="10px"
          strokeLinecap="round"
        ></circle>
      </svg>
    </section>
  )
}

export default CountDownLoader
