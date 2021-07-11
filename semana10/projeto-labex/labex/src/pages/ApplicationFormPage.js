import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { options } from 'yargs';
import useForm from '../hooks/useForm'

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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`

export const ApplicationFormPage = () => {
  const history= useHistory()

  const goBackList = () => {
    history.push('/trips/list')
  }

  const OnSubmitForm = () => {
    Event.preventDefault()
    alert('Seu cadastro foi enviado! Em breve entraremos em contato!', Form)
  }

  const { form, onChange, cleanFields } = useForm ({
    name: '', 
    age:'', 
    text:'', 
    profission:""
  })

  return (
    <Main >
      <h1>Formulário para inscrição</h1>
      <Form onSubmit={OnSubmitForm}>
        <select 
          
        />
        <input 
          placeholder="Nome"
          value={form.name}
          name={'name'}
          onChange={onChange}
          />
        <input 
          placeholder="Idade"
          value={form.age}
          name={'age'}
          onChange={onChange}
        />
        <input 
          placeholder="Texto de Candidatura"
          value={form.text}
          name={'text'}
          onChange={onChange}
        />
        <input 
          placeholder="Profissão"
          value={form.profission}
          name={'profission'}
          onChange={onChange}
        />
        <select />
        <Button>
          <SpecificButton>Enviar</SpecificButton>
          <SpecificButton onClick={goBackList}>Voltar</SpecificButton>
        </Button>
      </Form>
    </Main>
  );
}

export default ApplicationFormPage;