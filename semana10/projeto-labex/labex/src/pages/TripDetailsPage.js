import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
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

  const [trips, setTrips] = useState ([])
  const [candidates, setCandidates] = useState ([])
  const [approvedCandidates, setApprovedCandidates] = useState([])
  const [approve] = useState ([])
  const [reject] = useState([])

  useProtectedPage()

  const params = useParams ()

  const history= useHistory()

  const goBack = () => {
    history.push('/admin/trips/list')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/monica/trip/${params.id}`, {
      headers: {
        auth: token
      }
    }).then ((res) => {
      setTrips(res.data.trip)
      setCandidates(res.data.trip.candidates)
      setApprovedCandidates(res.data.trip.approved)
    }).catch((err) => {
      alert('Algo deu errado :(')
    })
  }, [])

  const decideCandidateApprove = (candidateId) => {
    const token = localStorage.getItem('token')

    const body = {
      approve: approve
    }

    axios.put (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/monica/trip/${params.id}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: token
      }
    }).then ((res) => {
      alert(res)
    }).catch((err) => {
      alert('Algo deu errado.')
    })
  }


  return (
    <Main >
      <h1>Detalhes da Viagem</h1>
    
      <Button>
        <SpecificButton onClick={goBack}>Voltar</SpecificButton>
      </Button>

    </Main>
  );
}

export default TripDetailsPage;