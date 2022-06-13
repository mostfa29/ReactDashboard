import styled from '@emotion/styled'
import { Button, TextField } from '@material-ui/core'
import './boxContainer.css'

import React from 'react'

function LoginBoxContainer() {
  return (

    <Box>
      
      <H1>Sign In</H1>

      <InputContainer>
      
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      
      <TextField
          id="outlined-basic"
          label="Password"
        type="password"
        variant="outlined"
        />
      </InputContainer>

      <ButtonContainer>
          <Button variant="outlined" className='btn outlined-button'>Sign In</Button>
          <Button variant="contained" className='btn normal-button'>Sign In With Google</Button>
      </ButtonContainer>
    </Box>

  )
}

export default LoginBoxContainer



const H1 = styled.h1`
padding:8% 0 ;
font-size: 3rem;
color:#3786E5;
text-align: center;
	font-weight:400;
`
const Box = styled.div`
box-shadow: 0px 1px 13px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 1px 13px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 1px 13px 0px rgba(0,0,0,0.75);
background-color: white;
width: 70vw;
height: 70vh;
align-items: center;
  box-sizing: border-box;

padding: 0 4%;

-webkit-border-radius: 1vw;
-moz-border-radius: 1vw;
border-radius: 1vw;
@media only screen and (min-width: 1200px) {
   width: 30vw;
 /* margin-top: 20vw; */
 border-radius: 3vw;
}
@media only screen and (max-width: 1199px ) {
   width: 50vw;
 /* margin-top: 20vw; */
 border-radius: 3vw;
}
@media only screen and (max-width: 550px) {
   width: 70vw;
 /* margin-top: 20vw; */
 border-radius: 3vw;
}
`
const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 5% 0;
@media only screen and (max-width: 1199px ) and (min-width: 550px) {
padding: 3% 0 3% 0;
}



`
const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 5% 0 5% 0;
gap: 3vw;
@media only screen and (max-width: 1199px ) and (min-width: 550px) {
padding: 3% 0 3% 0;
}

`