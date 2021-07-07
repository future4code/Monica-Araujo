import React, { useState } from 'react'
import {GlobalStyle, Logo, Header, Container, ContainerMain, Botao, DivBotao} from './StyledApp'
import TelaInicial from './components/TelaInicial'
import IconeUsuario from  './img/iconeusuario.png'
import TelaMatches from './components/TelaMatches'
import Seta from './img/seta.png'
import BotaoReseta from './components/BotaoReseta'

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
          <DivBotao>
            <BotaoReseta/>
          </DivBotao>
        </ContainerMain>
      </Container>
    </div>
    
  );
}

export default App;
