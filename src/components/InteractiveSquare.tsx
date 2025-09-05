import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export const InteractiveSquare = () => {
  const [isPressed, setIsPressed] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false)
      }, 1700) // 1500ms visible + 200ms fade-out
    }
    return () => clearTimeout(timer)
  }, [showToast])

  const handleClick = () => {
    if (!showToast) {
      setShowToast(true)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsPressed(true)
      handleClick()
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsPressed(false)
    }
  }

  return (
    <div className="relative flex items-center justify-center">
      {showToast && (
        <div
          className="absolute bottom-full mb-4 animate-toast-in rounded-toast bg-toast-background px-5 py-3 text-toast-text shadow-toast"
          style={{ animationFillMode: 'forwards' }}
        >
          <p className="text-sm font-medium md:text-base">Clicado!</p>
        </div>
      )}
      <div
        role="button"
        aria-label="Clique para interagir"
        tabIndex={0}
        className={cn(
          'flex cursor-pointer select-none items-center justify-center',
          'h-[150px] w-[150px] rounded-square-mobile text-2xl',
          'md:h-[200px] md:w-[200px]',
          'lg:h-[250px] lg:w-[250px] lg:rounded-square-desktop lg:text-3xl',
          'bg-square-default text-text-secondary shadow-square-default',
          'font-semibold transition-all duration-200 ease-out',
          'hover:scale-105 hover:bg-square-hover hover:shadow-square-hover',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
          {
            'scale-[0.95] bg-square-active': isPressed,
            'scale-105': !isPressed,
          },
        )}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      >
        Clique-me!
      </div>
    </div>
  )
}
