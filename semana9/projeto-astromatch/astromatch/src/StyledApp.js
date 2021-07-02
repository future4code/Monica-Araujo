import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

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

export {
  GlobalStyle,
  Logo,
  Header,
  Container,
  ContainerMain,
  Botao
}