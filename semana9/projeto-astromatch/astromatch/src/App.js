import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import TelaInicial from './components/TelaInicial'
import IconeUsuario from  './img/iconeusuario.png'
import TelaMatches from './components/TelaMatches'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif;
  }
`

const Logo = styled.h2`
  color: #570668;
  margin-left: 100px;
`

const Header = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: space-around;
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

const IconeUser = styled.div`
  align-content: flex-end;
  align-items: center;
  cursor: pointer;
`

const Botao = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Container>
        <ContainerMain>
          <Header>
            <div>
              <Logo>astromatch</Logo>
            </div>
            <IconeUser>
              <Botao><img src={IconeUsuario} /></Botao>
            </IconeUser>
          </Header>
          {/*<TelaInicial/>*/}
          <TelaMatches/>

        </ContainerMain>
      </Container>
    </div>
    
  );
}

export default App;
