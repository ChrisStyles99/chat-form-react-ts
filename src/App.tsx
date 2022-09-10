import React, { useState } from "react"
import ChatConfirmation from "./components/ChatConfirmation";
import ChatFormBirthDay from "./components/ChatFormBirthDay";
import ChatFormContact from "./components/ChatFormContact";
import ChatFormName from "./components/ChatFormName";
import ChatResponse from "./components/ChatResponse";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import { useForm } from "./hooks/useForm";

interface MessageForm {
  firstName: string,
  middleName: string,
  fatherLastName: string,
  motherLastName: string,
  day: string,
  month: string,
  year: string,
  email: string,
  phone: string
}

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

function App() {

  const [messages, setMessages] = useState<React.ReactElement[]>([<ChatFormName />]);

  const { formData, handleInputChange } = useForm<MessageForm>({firstName: '', middleName: '', fatherLastName: '', motherLastName: '', 
        day: '', month: '', year: '', email: '', phone: ''});

  const nextForm = () => {
    if(messages.length === 1) {
      if(!formData.firstName || !formData.fatherLastName) return
      setMessages([...messages, 
        <ChatResponse message={`${formData.firstName} ${formData.middleName} ${formData.fatherLastName} ${formData.motherLastName}`} />,
        <ChatFormBirthDay />
      ])
    } else if(messages.length === 3) {
      if(!formData.day || !formData.month || !formData.year) return
      setMessages([...messages,
      <ChatResponse message={`${formData.day} ${months[parseInt(formData.month) - 1]} ${formData.year}`} />,
      <ChatFormContact />])
    } else if(messages.length === 5) {
      if(!formData.email || !formData.phone) return
      setMessages([...messages,
        <ChatResponse message={`Correo electronico ${formData.email}
        Telefono celular: ${formData.phone}`} />,
        <ChatConfirmation />
      ])
    }
  }

  return (
    <div className="App">
      <Navbar />
      {messages.map(item => (
        <Message handleInputChange={handleInputChange} onClick={nextForm} >
          {item}
        </Message>
      ))}
    </div>
  )
}

export default App
