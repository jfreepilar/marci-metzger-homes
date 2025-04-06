import React from 'react'

const buttonProps = {
    text: "",
    backgroundColor:"",
    textColor:"",
}

export default function Button({buttonProps}) {
  return (
    <div className="">
<button
  className={`${buttonProps.backgroundColor} ${buttonProps.textColor} 
  rounded-full px-6 py-2 text-lg cursor-pointer
  transform hover:scale-105 transition-transform duration-300 ease-in-out opacity-90`}
>
  {buttonProps.text}
</button>


    </div>
  )
}
