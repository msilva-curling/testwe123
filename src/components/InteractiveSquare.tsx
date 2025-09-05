import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

type InteractionVariant = 'default' | 'glow' | 'pulse'

interface InteractiveSquareProps {
  variant?: InteractionVariant
}

const variantConfig = {
  default: {
    base: 'bg-square-default',
    hover: 'hover:bg-square-hover hover:shadow-square-hover hover:scale-105',
    active: 'bg-square-active scale-[0.95]',
    text: 'Clique-me!',
    toastMessage: 'Clicado!',
    toastBg: 'bg-toast-background',
  },
  glow: {
    base: 'bg-square-glow-default',
    hover: 'hover:bg-square-glow-hover hover:shadow-square-glow-hover',
    active: 'bg-square-glow-active',
    text: 'Gire-me!',
    toastMessage: 'Girou!',
    toastBg: 'bg-square-glow-hover',
  },
  pulse: {
    base: 'bg-square-pulse-default',
    hover: 'hover:bg-square-pulse-hover hover:animate-pulse-subtle',
    active: 'bg-square-pulse-active scale-[0.95]',
    text: 'Pulse-me!',
    toastMessage: 'Pulsou!',
    toastBg: 'bg-square-pulse-hover',
  },
}

export const InteractiveSquare = ({
  variant = 'default',
}: InteractiveSquareProps) => {
  const [isPressed, setIsPressed] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const config = variantConfig[variant]

  useEffect(() => {
    let toastTimer: NodeJS.Timeout
    if (showToast) {
      toastTimer = setTimeout(() => {
        setShowToast(false)
      }, 1700)
    }
    return () => clearTimeout(toastTimer)
  }, [showToast])

  const handleClick = () => {
    if (showToast) return

    setShowToast(true)

    if (variant === 'glow') {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const handleMouseDown = () => setIsPressed(true)
  const handleMouseUp = () => setIsPressed(false)
  const handleMouseLeave = () => setIsPressed(false)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleMouseDown()
      handleClick()
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleMouseUp()
    }
  }

  return (
    <div className="relative flex items-center justify-center">
      {showToast && (
        <div
          className={cn(
            'absolute bottom-full mb-4 animate-toast-in rounded-toast px-5 py-3 text-toast-text shadow-toast',
            config.toastBg,
          )}
          style={{ animationFillMode: 'forwards' }}
        >
          <p className="text-sm font-medium md:text-base">
            {config.toastMessage}
          </p>
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
          'text-text-secondary shadow-square-default',
          'font-semibold transition-all duration-200 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
          config.base,
          config.hover,
          {
            [config.active]: isPressed && variant !== 'glow',
            'animate-spin-once': isAnimating && variant === 'glow',
            'scale-[0.95]': isPressed && variant === 'glow',
          },
        )}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      >
        {config.text}
      </div>
    </div>
  )
}
