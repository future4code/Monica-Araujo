import React from "react";
import axios from "axios";
import styled from "styled-components";

const Headers = styled.header`
  background-color: black;
  color: white;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 5%;
  margin: 0;
`;

const AddConteiner = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-align: center;
  padding: 5%;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const AddField = styled.input`
  width: 30%;
  padding: 1%;
  margin-bottom: 5%;
`;

const ButtonAdd = styled.button`
  font-size: 16px;
  border-radius: 15px;
  width: 10%;
  padding: 1%;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const ButtonViewPlaylists = styled.button`
  font-size: 14px;
  border-radius: 15px;
  width: 10%;
  padding: 1%;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

class AddPlaylist extends React.Component {
  state = {
    name: ""
  };

  createNewPlaylist = () => {
    const body = {
      name: this.state.name
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "monica-araujo-molina"
          }
        }
      )
      .then((response) => {
        alert(`Playlist ${this.state.name} criada com sucesso!`);
        this.setState({ name: "" });
      })
      .catch((error) => {
        console.log(error.message);
        alert("Não possível criar a playlist com este nome!");
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <AddConteiner>
        <Title>Bem vindo ao Labefy!</Title>
        <p>Crie uma nova playlist:</p>
        <AddField
          value={this.state.name}
          onChange={this.onChangeNameValue}
          placeholder={"Digite o nome da sua nova Playlist"}
        ></AddField>
        <ButtonAdd onClick={this.createNewPlaylist}>criar</ButtonAdd>

        <p>Veja suas playlists:</p>
        <ButtonViewPlaylists onClick={this.props.changePage}>
          Suas Playlists
        </ButtonViewPlaylists>
      </AddConteiner>
    );
  }
}

export default AddPlaylist;