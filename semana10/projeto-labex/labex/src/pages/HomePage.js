import React from 'react'
import { useHistory } from "react-router-dom";
import Astronaut from '../img/astronaut.png'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Img = styled.div`
  margin-left: 200px
`

export const HomePage = () => {
  const history = useHistory()

  const goToListTripsPage = () => {
    history.push('/trips/list')
  }

  const goToLoginPage = () => {
    history.push('/login')
  }

  return (
    <Container >
      <Main>
        <h1>Labe X</h1>
        <p>Encontre as melhores ofertas para sua viagem extra terrestre!</p>
        <Button>
          <SpecificButton onClick={goToListTripsPage}>Ver Viagens</SpecificButton>
          <SpecificButton onClick={goToLoginPage}>Área Administrativa</SpecificButton>
        </Button>
      </Main>
      <Img>
        <img src={Astronaut} width='500px' height='500px'/>
      </Img>
    </Container>
  );
}

export default HomePage;