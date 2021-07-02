import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BotaoLimpar = styled.button`
    color: #570668;
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    width: 150px;
    align-items: center;
    background-color: silver;
    font-weight: bold;
    margin-bottom: 5px;

`

const BotaoReseta = () => {
    const Limpar = () =>{
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/monica-araujo/clear')
        .then (() => {
            alert('Seus matches foram limpos!')
        })
        .catch ((err) => {
            alert(err.res.data)
        })
    }

    return (
        <BotaoLimpar onClick={Limpar}>Limpar os matches</BotaoLimpar>
    )
}
export default BotaoReseta
