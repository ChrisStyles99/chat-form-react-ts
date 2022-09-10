import styled from 'styled-components'

interface ChatFormInputProps {
  type: string,
  placeholder: string,
  name: string,
  onChange?: () => void
}

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.25rem;
`;

function ChatFormInput({type, placeholder, name, onChange}: ChatFormInputProps) {
  return (
    <Input type={type} placeholder={placeholder} name={name} onChange={onChange} />
  )
}

export default ChatFormInput