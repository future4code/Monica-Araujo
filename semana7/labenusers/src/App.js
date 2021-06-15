import React from 'react'
import axios from 'axios'

const url =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers = {
  headers: {
    Authorization: "monica-araujo-molina"
  }
};

export default class App extends React.Component {
  state = {
    users: [],
    inputNome: "",
    inputEmail: ""
  };

  componentDidMount() {
    this.pegarUser();
  }

  








}
