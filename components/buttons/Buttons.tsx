import React, { ReactNode } from 'react'

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children:ReactNode;
 }
export function Button({children,...props}:ButtonsProps) {
  return (
   <button {...props} >
    {children}
   </button>
  )
}

