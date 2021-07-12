import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
const CardTrip = styled.div`
  background-color: white;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  color: #014366;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
  &:hover{
    background-color: lightblue;
  }
`


export const AdminHomePage = () => {
  useProtectedPage()
  
  const history= useHistory()

  const goBack = () => {
    history.push('/')
  }

  const goToCreateTripPage = () => {
    history.push ('/admin/trips/create')
  }

  const goToTripDetailsPage = () => {
    history.push('/admin/trips/:id')

  }

  const [trips, setTrips] = useState ([])

  useEffect(() => {
    axios.get
      ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/monica/trips')
      .then((res) =>{
        setTrips(res.data.trips)
        console.log()
      })
  }, [])
  
  const tripsMaped = trips.map((trip) => {
    return <CardTrip onClick={goToTripDetailsPage}>
      {trip.name}
      </CardTrip>
  })

  return (
    <Main >
      <h1>Área administrativa</h1>
      <Button>
        <SpecificButton onClick={goBack}>Voltar</SpecificButton>
        <SpecificButton onClick={goToCreateTripPage}>Criar Viagem</SpecificButton>
        <SpecificButton >Logout</SpecificButton>
      </Button>
      <p onClick={goToTripDetailsPage}></p>
      {tripsMaped}
    </Main>
  );
}

export default AdminHomePage;