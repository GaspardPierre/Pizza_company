import React from 'react'

export default function Button({children,disabled}) {
  return (
    <button  disabled={disabled} className="bg-yellow-400 uppercase
     font-semibold text-stone-800
      py-3 px-4 tracking-widest
       hover:bg-yellow-300 rounded-full 
       transition-colors duration-300 
       focus:outline-none focus:ring-yellow-300 
       focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4">{children}</button>
  )
}
