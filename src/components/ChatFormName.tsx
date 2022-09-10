import React from 'react'
import ChatForm from './ChatForm'
import ChatFormInput from './ChatFormInput'

interface ChatFormBirthdayProps {
  handleInputChange?: () => void,
  onClick?: () => void
}

function ChatFormName({handleInputChange, onClick}: ChatFormBirthdayProps) {
  return (
    <ChatForm>
      <h2>¿Cual es tu nombre?</h2>
      <ChatFormInput name='firstName' type='string' placeholder='Nombre' onChange={handleInputChange} />
      <ChatFormInput name='middleName' type='string' placeholder='Segundo nombre' onChange={handleInputChange} />
      <ChatFormInput name='fatherLastName' type='string' placeholder='Apellido paterno' onChange={handleInputChange} />
      <ChatFormInput name='motherLastName' type='string' placeholder='Apellido materno' onChange={handleInputChange} />
      <button onClick={onClick}>Siguiente</button>
    </ChatForm>
  )
}

export default ChatFormName