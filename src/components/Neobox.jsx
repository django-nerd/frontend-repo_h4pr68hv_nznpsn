import React from 'react'

const Neobox = ({ as:Comp = 'div', className = '', children, ...props }) => {
  return (
    <Comp
      className={`rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl text-sky-100 shadow-[8px_8px_24px_rgba(0,0,0,0.6),-8px_-8px_24px_rgba(255,255,255,0.03)] ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Neobox
