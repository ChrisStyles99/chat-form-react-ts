import React from 'react'
import styled from 'styled-components'
import ChatFormInput from './ChatFormInput';

interface ChatFormProps {
  children?: React.ReactNode
}

const ChatFormWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ChatFormContainer = styled.div`
  background-color: #dddddd;
  padding: 0.5rem;
  width: 80%;
`;

const ChatFormImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

function ChatForm({ children }: ChatFormProps) {
  return (
    <ChatFormWrapper>
      <ChatFormImage src="https://images.pexels.com/photos/13524012/pexels-photo-13524012.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="Chat profile picture" />
      <ChatFormContainer>
        {children}
      </ChatFormContainer>
    </ChatFormWrapper>
  )
}

export default ChatForm