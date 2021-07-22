import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import {goToFeedPage} from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText) => {
    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeedPage(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history, setRightButtonText) => {
    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            alert('Sua conta foi criada com sucesso!')
            goToFeedPage(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

}