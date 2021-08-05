import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const postVote = async (id, direction, userVote) => {

    const body = {
        direction: direction
    }

    if (userVote === null) {
        await axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            alert('Sucesso ao realizar a operação', res)
        }).catch((err) => {
            alert('Não foi possível votar no comentário', err)
        })

    } else {

        await axios.put (`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            alert('Sucesso ao realizar a operação', res)
        }).catch((err) => {
            alert('Não foi possível votar no comentário', err)
        })
    }
}