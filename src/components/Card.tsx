import React from 'react'

interface CardProps {
  className?: string
  children: string
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`m-4 block w-full gap-8 rounded-lg bg-white text-left font-sans shadow-[_2px_15px_-3px_rgba(0,0,0,0.07)0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-cyan-950 ${className}`}
    >
      <div className="p-3">{children}</div>
    </div>
  )
}

export default Card
