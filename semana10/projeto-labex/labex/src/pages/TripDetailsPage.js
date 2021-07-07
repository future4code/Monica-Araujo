import React from 'react'
import styled from 'styled-components'

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
  return (
    <Main >
      <h1>Detalhes da Viagem</h1>
      <p>Aqui ficará todos os detalhes da viagem</p>
    </Main>
  );
}

export default TripDetailsPage;