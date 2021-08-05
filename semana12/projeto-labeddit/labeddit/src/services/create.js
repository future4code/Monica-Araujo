import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            clear()
            alert('Post criado com sucesso', res)
        })
        .catch((err) => {
            alert('Algo deu errado', err)

        })

}   //está aparecendo o alert de erro, mesmo dando certo e aparecendo na tela o comentário

export const createComment = (id, body, clear) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            clear()
            alert('Seu comentário foi adicionado!', res)
        })
        .catch((err) => {
            alert('Algo deu errado :(', err)
        })
}