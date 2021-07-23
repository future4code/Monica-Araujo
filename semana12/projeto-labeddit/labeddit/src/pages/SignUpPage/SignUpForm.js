import React from 'react'
import {InputContainer} from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../services/user'

const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()

    const [form, onChange, clear] = useForm({username: '', email: '', password: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    value={form.username}
                    name={'username'}
                    onChange={onChange}
                    label={'Nome de usuário'}
                    variant={'outlined'}
                    fullWidth
                    required
                    margin={'normal'}
                />
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'email'}
                />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'password'}
                />
                <Button
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    Criar Conta
                    </Button>
            </form>
        </InputContainer>
    )
}

export default SignUpForm