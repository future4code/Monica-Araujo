import React from 'react'
import {MainContainer, H1, SingUpButtonContainer} from './styled'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import {goToSignUpPage} from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LonginPage = ({ setRightButtonText}) => {
    const history = useHistory()
    useUnprotectedPage()

    return (
        <MainContainer>
            <H1>LabEddit</H1>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SingUpButtonContainer>
                <Button
                    onClick={() => goToSignUpPage(history)}
                    type={'submit'}
                    fullWidth
                    variant={'text'}
                    color={'primary'}
                    margin={'normal'}
                    >
                    Não possui conta? Cadastre-se!
                    </Button>
            </SingUpButtonContainer>
        </MainContainer>
    )
}

export default LonginPage