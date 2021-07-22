import React from 'react'
import {MainContainer, H1} from './styled'
import SignUpForm from './SignUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUp = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (
        <MainContainer>
            <H1>Faça seu Cadastro!</H1>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </MainContainer>
    )
}

export default SignUp