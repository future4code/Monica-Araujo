import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useProtectedPage from '../hooks/UseProtectedPage'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Button = styled.div`
  margin-top: 50px;
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

export const AdminHomePage = () => {
  useProtectedPage()
  
  const history= useHistory()

  const goBack = () => {
    history.push('/')
  }
/*
  const Logout = () => {
    history.push('/')
  }
*/
  const goToCreateTripPage = () => {
    history.push ('/admin/trips/create')
  }

  const goToTripDetailsPage = () => {
    history.push('/admin/trips/:id')

  }
  return (
    <Main >
      <h1>Área administrativa</h1>
      <p>Abaixo ficará a lista das viagens para checar mais detalhes</p>
      <Button>
        <SpecificButton onClick={goBack}>Voltar</SpecificButton>
        <SpecificButton onClick={goToCreateTripPage}>Criar Viagem</SpecificButton>
        <SpecificButton >Logout</SpecificButton>
      </Button>
      <p onClick={goToTripDetailsPage}>Viagem 1</p>
    </Main>
  );
}

export default AdminHomePage;