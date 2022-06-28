import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

import { Chip, Container } from '@material-ui/core';
import NavbarElements from './NavbarElements';
function NavBar() {
  //change navbar state (default open)
  const [close, setClose] = useState(false)
  const setNavState = () => {
    setClose(!close)
  }

  //get the screen dimension
 const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions=()=> {

   const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(()=>getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      const handleResize=()=> {
        setWindowDimensions(()=>getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return (
    <NavContainer style={{width:`${windowDimensions.width<748?'9vw':close?'6vw':'20vw'}`}}>
      {windowDimensions.width>748?
      <Header style={{ textAlign: 'right', marginRight: '1vw', }}>
    
         <CloseIcon style={{ marginTop: '1vw', fontSize: '22px' }} onClick={() => setNavState()} />

    </Header>
        : null
      }

      <Container style={{padding:'0',marginTop:windowDimensions.width<748?'0':'45px'}}>
        <NavbarElements close={windowDimensions.width<748?true:close}  />
      </Container>
    </NavContainer>
  )
}

export default NavBar

const NavContainer = styled.div`
top: 0;
position: absolute;
height:100vh;
background-color: red;

`

const Header = styled.div`


`