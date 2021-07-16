import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
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

export const CreateTripPage = () => {
  const history= useHistory()

  const goBackAdminHomePage = () => {
    history.push('/admin/trips/list')
  }

  const { form, onChange, cleanFields } = useForm ({
    name: '', 
    date:'', 
    description:'', 
    durationInDays:""
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    alert('Viagem criada com sucesso')
    cleanFields()
  }

  return (
    <Main >
      <h1>Criar Viagem</h1>
      <Form onSubmit={onSubmitForm}>
        <InputStyle 
          placeholder="Nome"
          value={form.name}
          name={'name'}
          onChange={onChange} 
          required
          pattern={"^.{3,}"}
          title={"O nome da viagem deve ter no mínimo 3 letras"}
        />

        <SelectStyle>
          <option>Selecione um planeta</option>
          <option>Marte</option>
          <option>Vênus</option>
          <option>Saturno</option>
        </SelectStyle>

        <InputStyle 
          placeholder="dd/mm/aaaa"
          value={form.date}
          name={'date'}
          onChange={onChange}
          type='date'
          required
        />
        <InputStyle 
          placeholder="Descrição"
          value={form.description}
          name={'description'}
          onChange={onChange}
          required
          pattern={"^.{5,}"}
          title={"A descrição da viagem deve ter no mínimo 5 caracteres"}
        />
        <InputStyle 
          placeholder="Duração em dias"
          value={form.durationInDays}
          name={'durationInDays'}
          onChange={onChange}
          required
          type={"number"}
          min={50}
        />
        <Button>
          <SpecificButton onClick={goBackAdminHomePage}>Voltar</SpecificButton>
          <SpecificButton>Criar</SpecificButton>
        </Button>
      </Form>
    </Main>
  );
}

export default CreateTripPage;