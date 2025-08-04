import React from 'react'


interface TextFeildProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?:string;
 }
function TextFeild({...props}:TextFeildProps) {
  return (
    <div >
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props}   />
    </div>
  )
}

export default TextFeild