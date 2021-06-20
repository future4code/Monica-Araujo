import React from "react";
import styled from "styled-components";
import AddPlaylist from "./components/AddPlaylist";
import Playlists from "./components/Playlists";


const AppConteiner = styled.div`
  background-color: black;
  color: white;
  margin: 0;
`;

const Header = styled.header`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
  color: white;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 3%;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.menu`
  display: flex;
  list-style: none;
  font-size: 24px;
`

const Li = styled.li`
  margin-left: 25px;
  cursor: pointer;
`
const Footers = styled.footer`
  background-image: linear-gradient(to right, magenta, purple, blueviolet, blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 97%;
  height: 15%;
  padding-bottom: 0;
  margin: 0;
  cursor: pointer;
  padding-left: 2%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px
`;

const ButtonPremium = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 15px;
  align-items: center;
  margin-right: 35px;
  cursor: pointer
`

const TextButtonPremium = styled.text`
  align-items: center;
  color: blueviolet;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: bold;
`

class App extends React.Component {
  state = {
    currentPage: "addPlaylist"
  };

  changePage = () => {
    if (this.state.currentPage === "addPlaylist") {
      this.setState({ currentPage: "playlists" });
    } else {
      this.setState({ currentPage: "addPlaylist" });
    }
  };

  render() {
    return (
      <AppConteiner>
        <Header>
          <strong>Labefy</strong>
          <Menu>
            <Li>
              Premium
            </Li>
            <Li>
              Inscreva-se
            </Li>
            <Li>
              Entrar
            </Li>
            <Li>
              Suporte
            </Li>
          </Menu>
        </Header>
        {this.state.currentPage === "addPlaylist" ? (
          <AddPlaylist changePage={this.changePage} />
        ) : (
          <Playlists changePage={this.changePage} />
        )}
        <Footers>
          <p>Experimente o Premium, grátis por 30 dias. Escute música no modo offline e sem anúncios</p>
          <ButtonPremium>
            <TextButtonPremium>Ganhe 1 mês grátis</TextButtonPremium>
          </ButtonPremium>
        </Footers>
      </AppConteiner>
    );
  }
}

export default App;