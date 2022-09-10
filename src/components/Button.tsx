import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  text: string,
  onClick: () => void,
  isSave: boolean
}

const ButtonWrapper = styled.button<{isSave: boolean}>`
  display: block;
  background-color: ${props => props.isSave ? '#f024af' : '#8f8f8f'};
  width: ${props => props.isSave ? '90%' : '50%'};
  margin: 1rem auto;
  font-size: 1.25rem;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 0.75rem;
  cursor: pointer;
`;

function Button({text, onClick, isSave}: ButtonProps) {
  return (
    <ButtonWrapper isSave={isSave} onClick={onClick}>{text}</ButtonWrapper>
  )
}

export default Button