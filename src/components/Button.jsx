import React from 'react'

const buttonProps = {
    text: "",
    backgroundColor:"",
    textColor:"",
}

export default function Button({buttonProps}) {
  return (
    <>
      <button
        className={`${buttonProps.backgroundColor} ${buttonProps.textColor} 
        rounded-full px-6 py-2 text-lg cursor-pointer
        hover:scale-110 transition-transform duration-300 ease-in-out transform`}>
        {buttonProps.text}
      </button>
    </>
  )
}
