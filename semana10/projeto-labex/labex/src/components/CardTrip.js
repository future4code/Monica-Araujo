import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Card = styled.div`
    background-color: white;
    width: 700px;
    height: 110px;
    border-radius: 10px;
    padding: 5px;
    color: #014366;
    font-weight: bold
`

export const CardTrip = () => {
  const history= useHistory()

  const goToTripDetailsPage = () => {
    history.push('/admin/trips/:id')
  }

  const [tripsList, setTripsList] = useState([])

  useEffect (() => {
  axios
    .get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/monica/trips')
    .catch((res) => {
    setTripsList (res.data.trips)
    console.log(tripsList)
  }) 
    .then((err) => {
    console.log(err.data)
  })
}, [])

  const mapedTrips = tripsList.map((trip)=>{
    return <div 
      key={trip.id}
      onClick={goToTripDetailsPage}>
      <h3>{trip.name}</h3>
      </div>

  })   

  return (
    <Card>
      {mapedTrips}
    </Card>
  )
}

