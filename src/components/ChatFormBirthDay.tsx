import React from 'react'
import ChatForm from './ChatForm'
import ChatFormInput from './ChatFormInput'

interface ChatFormBirthdayProps {
  handleInputChange?: () => void,
  onClick?: () => void
}

function ChatFormBirthDay({handleInputChange, onClick}: ChatFormBirthdayProps) {
  return (
    <ChatForm>
      <h2>¿Cual es tu fecha de nacimiento?</h2>
      <ChatFormInput name='day' type='number' placeholder='Día' onChange={handleInputChange} />
      <ChatFormInput name='month' type='number' placeholder='Mes' onChange={handleInputChange} />
      <ChatFormInput name='year' type='number' placeholder='Año' onChange={handleInputChange} />
      <button onClick={onClick}>Siguiente</button>
    </ChatForm>
  )
}

export default ChatFormBirthDay