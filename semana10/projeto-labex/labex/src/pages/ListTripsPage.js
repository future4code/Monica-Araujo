import {React, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
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
const Card = styled.div`
  background-color: white;
  width: 650px;
  height: 170px;
  border-radius: 10px;
  color: #014366;
  display: flex;
  font-size: 18px;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding-left: 15px;
`

export const ListTripsPage = () => {

  const history= useHistory()

  const goToApplicatonForm = () => {
    history.push ('/trips/application')
  }

  const goBack = () => {
    history.push('/')
  }

  const [trips, setTrips] = useState ([])

  useEffect(() => {
    axios.get
      ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/monica/trips')
      .then((res) =>{
        setTrips(res.data.trips)
      })
  }, [])
  
  const tripsMaped = trips.map((trip) => {
    return <Card>
      <p><b>Nome: </b> {trip.name}</p>
      <p><b>Descrição: </b> {trip.description}</p>
      <p><b>Planeta: </b> {trip.planet}</p>
      <p><b>Duração em dias: </b> {trip.durationInDays}</p>
      <p><b>Data: </b> {trip.date}</p>
      </Card>
  })

  
  return (
    <Main >
      <h1>Nossas Viagens</h1>
      <Button>
        <SpecificButton onClick={goToApplicatonForm}>Inscreva-se</SpecificButton>
        <SpecificButton onClick={goBack}>Voltar</SpecificButton>
      </Button>
      {tripsMaped}
    </Main>
  );
}

export default ListTripsPage;