import React, { useState } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import TelaInicial from './components/TelaInicial'
import IconeUsuario from  './img/iconeusuario.png'
import TelaMatches from './components/TelaMatches'
import Seta from './img/seta.png'
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif
  }
`

const Logo = styled.h1`
  color: #570668;
  margin-left: 80px;
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

const Botao = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`


const App = () => {
  const [pagina, setPagina] = useState('TelaInicial');

  const mudaPagina = () => {
    setPagina('TelaMatches')
  }

  const mudaPaginaInicial = () => {
    setPagina('TelaInicial')
  }

  const RenderizaPagina = () => {
    switch (pagina) {
      case "TelaInicial": 
        return <TelaInicial/>
      case "TelaMatches": 
        return <TelaMatches/>
      default: 
        return alert('Página não econtrada')
    }
  }

  const RenderizaIcone = () => {
    switch (pagina) {
      case "TelaInicial": 
        return (
          <img
            src={IconeUsuario}
            alt="icone-match"
            onClick={mudaPagina}
          />
        );
      case "TelaMatches":
        return (
          <img
            src={Seta}
            alt="icone-match"
            onClick={mudaPaginaInicial}
          />
        );
      default:
        return alert('página não encontrada')
    }
  }



  return (
    <div>
      <GlobalStyle/>
      <Container>
        <ContainerMain>
          <Header>
            <div>
              <Logo>astromatch</Logo>
            </div>
            <Botao>{RenderizaIcone()}</Botao>
          </Header>
          {RenderizaPagina()}
        </ContainerMain>
      </Container>
    </div>
    
  );
}

export default App;
