import React from 'react'
import { useHistory } from 'react-router-dom';

export const ListTripsPage = () => {
  const history= useHistory()

  const goToApplicatonForm = () => {
    history.push ('/trips/application')
  }

  const goBack = () => {
    history.push('/')
  }

  return (
    <div >
      <p>List Trips Page</p>
      <button onClick={goToApplicatonForm}>Inscreva-se</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}

export default ListTripsPage;