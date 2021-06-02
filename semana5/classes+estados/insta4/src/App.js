import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post 
          nomeUsuario={'monica'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://image.freepik.com/fotos-gratis/cascata-barco-limpo-china-natural-rural_1417-1356.jpg'}
        />
        <Post 
          nomeUsuario={'amandinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://image.freepik.com/fotos-gratis/doca-de-madeira-vazia-em-um-lago-durante-um-por-do-sol-de-tirar-o-folego-um-fundo-legal_181624-27469.jpg'}
        />
      </MainContainer>
    );
  }

}
export default App;