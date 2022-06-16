import React, { useState } from 'react'
import styled from 'styled-components'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Chip, Container } from '@material-ui/core';
import NavbarElements from './NavbarElements';
function NavBar() {
  const [close, setClose] = useState(false)
  const setNavState = () => {
    setClose(!close)
  }
  return (
    <NavContainer style={{width:`${close?'3vw':'15vw'}`}}>
      <Header>
        <MenuOpenIcon onClick={()=> setNavState()} />
        
     
      </Header>

      <Container>
        <NavbarElements/>
      </Container>
    </NavContainer>
  )
}

export default NavBar

const NavContainer = styled.div`

height:100vh;
background-color: red;

`

const Header = styled.div`


`