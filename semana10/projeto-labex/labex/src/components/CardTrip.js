import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'


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
        return <div key={trip.id}>
           <h1>{trip.name}</h1>
            <h3>Título: {trip.name}</h3>            {/* <= Estilizar cards*/}
            <h3>Descrição: {trip.description}</h3>
            <h3>Planeta: {trip.planet}</h3>
            <h3>Duração: {trip.durationInDays}</h3>
            <h3>Data: {trip.date}</h3>

        </div>

    })   

  return (
      <Card>
        {mapedTrips}
      </Card>
  )
}

