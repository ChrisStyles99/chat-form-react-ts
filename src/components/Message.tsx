import React, { ChangeEvent, cloneElement } from 'react'

interface MessageProps {
  children: React.ReactElement,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onClick: () => void
}

function Message({children, handleInputChange, onClick}: MessageProps) {
  return (
    <>
      {cloneElement(children, {
        handleInputChange, onClick
      })}
    </>
  )
}

export default Message