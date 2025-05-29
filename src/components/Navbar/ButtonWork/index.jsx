import { useState, useEffect } from 'react'

function HiringStatusButton () {
  const [isPulsing, setIsPulsing] = useState(false)


  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(prev => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
      <div className={`
        relative px-4 py-2 rounded-full shadow-md
        w-[240px] h-[34px]
        bg-gradient-to-r from-orange-500 to-orange-600
        text-white font-medium text-sm
        flex items-center
        ${isPulsing ? 'animate-pulse' : ''}
        transition-all duration-1000 mb-[30px]
      `}>
        <span className="ml-2 w-2 h-2 bg-white rounded-full animate-ping absolute left-2"></span>
        <span className="ml-2 w-2 h-2 bg-white rounded-full absolute left-2"></span>
        <span className='ml-4'>Disponible para contratación</span>
        
        {/* Punto de estado activo */}
      </div>
  )
}

export { HiringStatusButton }