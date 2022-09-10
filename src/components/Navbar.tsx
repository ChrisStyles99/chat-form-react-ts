import React from 'react'
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #ec3acf;
  height: 150px;
  padding: 2rem;
  margin-bottom: 0.5rem;
`;

const NavbarLogo = styled.h1`
  font-size: 2rem;
`;

const NavbarSubtitle = styled.p`
  font-size: 0.75rem;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogo>Formulario en chat</NavbarLogo>
      <NavbarSubtitle>En menos de 5 minutos</NavbarSubtitle>
    </NavbarContainer>
  )
}

export default Navbar