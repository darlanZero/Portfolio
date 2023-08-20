'use client'
import React, { useState } from 'react'

interface CollapseButtonProps {
  buttonText: string
  cardText: string[]
}

const CollapseButton: React.FC<CollapseButtonProps> = ({
  buttonText,
  cardText,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div>
      <button
        className="m-4 rounded-md bg-green-900 px-4 py-2 shadow-md"
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
      {isCollapsed && (
        <div className="mt-4 w-full max-w-sm animate-collapseCard rounded-md border border-blue-300 bg-white p-4 text-black shadow-md">
          {cardText.map((text, index) => (
            <div className="animate-pulse" key={index}>
              {text}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CollapseButton
