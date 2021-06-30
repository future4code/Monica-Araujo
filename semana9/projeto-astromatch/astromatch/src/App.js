import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import TelaInicial from './components/TelaInicial'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }
`

const Logo = styled.h2`
  color: purple
`

const Header = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  border-bottom: 1px solid silver;
  width: 97%;
  
`

const Container = styled.div`
  background-color: grey;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  margin: 0;
  padding: 0;
`

const ContainerMain = styled.div`
  background-color: white;
  width: 400px;
  height: 600px;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Container>
        <ContainerMain>
          <Header>
            <Logo>Astromatch</Logo>
          </Header>
          <TelaInicial/>
        </ContainerMain>
      </Container>
    </div>
    
  );
}

export default App;
