import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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

export const CreateTripPage = () => {
  const history= useHistory()

  const goBackAdminHomePage = () => {
    history.push('/admin/trips/list')
  }

  return (
    <Main >
      <h1>Criar Viagem</h1>
      <p>Aqui o adm pode criar viagens</p>
      <Button>
        <SpecificButton onClick={goBackAdminHomePage}>Voltar</SpecificButton>
        <SpecificButton>Criar</SpecificButton>
      </Button>
    </Main>
  );
}

export default CreateTripPage;