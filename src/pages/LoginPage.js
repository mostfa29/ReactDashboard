import styled from '@emotion/styled'
import React from 'react'
import LoginBoxContainer from '../components/LoginBoxContainer/Index'
// import {styled} from '"styled'
function LoginPage() {

  // Todo fix material-ui css style broke sometimes 
    return (
        <PageContainer>
            <LoginBoxContainer/>
        
        </PageContainer>
  )
}

export default LoginPage

const PageContainer = styled.div`
background: linear-gradient(to bottom,#3786E5 50%, #ABC9ED 50%);
width: 100vw;
height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


