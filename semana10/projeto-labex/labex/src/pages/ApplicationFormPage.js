import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
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
  margin-top: 60px
`
const InputStyle = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: none
`

const SelectStyle = styled.select`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: none
`

export const ApplicationFormPage = () => {
  const history= useHistory()

  const goBackList = () => {
    history.push('/trips/list')
  }

  const { form, onChange, cleanFields } = useForm ({
    name: '', 
    age:'', 
    text:'', 
    profission:""
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    alert('Seu cadastro foi enviado! Em breve entraremos em contato!')
    cleanFields()
  }

  return (
    <Main >
      <h1>Formulário para inscrição</h1>
      <Form onSubmit={onSubmitForm}>
        <SelectStyle
          
        />
        <InputStyle 
          placeholder="Nome"
          value={form.name}
          name={'name'}
          onChange={onChange}
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
        <InputStyle 
          placeholder="Idade"
          value={form.age}
          name={'age'}
          onChange={onChange}
          required
          type={"number"}
          min={18}
        />
        <InputStyle 
          placeholder="Texto de Candidatura"
          value={form.text}
          name={'text'}
          onChange={onChange}
          required
          pattern={"^.{10,}"}
          title={"O texto de candidatura deve ter no mínimo 10 caracteres"}
        />
        <InputStyle 
          placeholder="Profissão"
          value={form.profission}
          name={'profission'}
          onChange={onChange}
          required
        />
        <SelectStyle />
        <Button>
          <SpecificButton>Enviar</SpecificButton>
          <SpecificButton onClick={goBackList}>Voltar</SpecificButton>
        </Button>
      </Form>
    </Main>
  );
}

export default ApplicationFormPage;