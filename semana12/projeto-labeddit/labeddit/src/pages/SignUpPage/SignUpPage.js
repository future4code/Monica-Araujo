import React from 'react'
import {MainContainer, H1} from './styled'
import SignUpForm from './SignUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import logo from '../../assets/logo.png'

const SignUp = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (
        <MainContainer>
            <img src={logo} width="15%" height="20%"/>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </MainContainer>
    )
}

export default SignUp