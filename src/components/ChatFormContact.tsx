import React from 'react'
import ChatForm from './ChatForm'
import ChatFormInput from './ChatFormInput'

interface ChatFormBirthdayProps {
  handleInputChange?: () => void,
  onClick?: () => void
}

function ChatFormContact({handleInputChange, onClick}: ChatFormBirthdayProps) {
  return (
    <ChatForm>
      <h2>¿Cual es tu nombre?</h2>
      <ChatFormInput name='email' type='email' placeholder='Correo Electronico' onChange={handleInputChange} />
      <ChatFormInput name='phone' type='tel' placeholder='Telefono celular' onChange={handleInputChange} />
      <button onClick={onClick}>Siguiente</button>
    </ChatForm>
  )
}

export default ChatFormContact