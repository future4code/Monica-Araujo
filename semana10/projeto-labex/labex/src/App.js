import React from 'react'
import {Router} from './route/Router'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  body {
    background-color: #014366;
    color: white
  }
  button {
    border: none;
  }
`


const Header = styled.header`
  background-color: #014366;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`

const H1 = styled.h1`
  color: white
`


function App() {
  return (
    <div>
      <GlobalStyle />
        <Header>
          <H1>LabeX</H1>
        </Header>
        <Router/>
    </div>
  );
}

export default App;
