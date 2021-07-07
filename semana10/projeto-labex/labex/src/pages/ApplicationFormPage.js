import React from 'react'
import { useHistory } from 'react-router-dom';
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

export const ApplicationFormPage = () => {
  const history= useHistory()

  const goBackList = () => {
    history.push('/trips/list')
  }
  return (
    <Main >
      <h1>Formulário para inscrição</h1>
      <p>Aqui ficará o formulario para inscrição do usuario</p>
      <Button>
        <SpecificButton>Enviar</SpecificButton>
        <SpecificButton onClick={goBackList}>Voltar</SpecificButton>
      </Button>
    </Main>
  );
}

export default ApplicationFormPage;