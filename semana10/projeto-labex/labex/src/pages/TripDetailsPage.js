import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import useProtectedPage from '../hooks/UseProtectedPage'

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

export const TripDetailsPage = () => {
  useProtectedPage()
  
  useEffect (() => {
    const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/monica/trip/7IIY7YtE3pzG1uf8ZdIO', {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log('deu erro: ', err.res)
      })
  }, [])

  return (
    <Main >
      <h1>Detalhes da Viagem</h1>
    </Main>
  );
}

export default TripDetailsPage;