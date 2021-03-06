import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import {goToFeedPage} from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            setIsLoading(false)
            goToFeedPage(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            setIsLoading(false)
            alert('Sua conta foi criada com sucesso!')
            goToFeedPage(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            alert(err.response.data.message)
            setIsLoading(false)
        })

}