import React from 'react'
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Button = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

`
const SpecificButton = styled.button`
  margin: 0 10px 0 0;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  width: 150px;
  &:hover{
    background-color: lightblue;
    font-weight: bold;
  } 
`

const DivInput = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Input = styled.input`
  width: 250px;
  height: 25px;
  margin-top: 20px;
  border-radius: 5px;
  border: none
`

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState ('')

  const history= useHistory()

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const OnSubmit = () => {
    const body = {
      email: email,
      password: password
    }
    axios 
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/monica/login", body)
        .then ((res) => {
          alert('Usuário logado, você será direcionado para a página administrativa')
          localStorage.setItem('token', res.data.token)
          history.push('/admin/trips/list')
        }).catch ((err) => {
          alert('As informações inseridas estão erradas. Tente novamente')
        })
  }

  const goBack = () => {
    history.push('/')
  }


  return (
    <Main >
      <h1>Login</h1>
      <DivInput>
        <Input
          placeholder='email'
          type='email'
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          placeholder='senha'
          type='password'
          value={password}
          onChange={onChangePassword}
        />
      </DivInput>
      <Button>
        <SpecificButton onClick={OnSubmit}>Entrar</SpecificButton>
        <SpecificButton onClick={goBack}>Voltar</SpecificButton>
      </Button>
    </Main>
  );
}

export default LoginPage;