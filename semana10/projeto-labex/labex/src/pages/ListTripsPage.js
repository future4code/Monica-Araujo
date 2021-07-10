import {React, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { CardTrip } from '../components/CardTrip';
import axios from 'axios'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Button = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
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

export const ListTripsPage = () => {

  const history= useHistory()

  const goToApplicatonForm = () => {
    history.push ('/trips/application')
  }

  const goBack = () => {
    history.push('/')
  }

  
  return (
    <Main >
      <h1>Nossas Viagens</h1>
      <Button>
        <SpecificButton onClick={goToApplicatonForm}>Inscreva-se</SpecificButton>
        <SpecificButton onClick={goBack}>Voltar</SpecificButton>
      </Button>
      <CardTrip />
    </Main>
  );
}

export default ListTripsPage;