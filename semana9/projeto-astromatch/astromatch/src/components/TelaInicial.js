import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Coracao from '../img/coracao.png'
import X from '../img/x.png'
import axios from 'axios'

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const All = styled.div`
    align-items: center;
`

const Img = styled.img`
    display: flex;
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 15px;
    width: 350px;
    height: 300px;
     
`

const Label = styled.label`
    top: 330px;
    color: black;
    width: 94%;
    padding-left: 24px;
    display: flex;
    flex-direction: column;

`

const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 25px;
`

const BotaoVermelho = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
    border: 1px solid red;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    &:hover {
        background-color: lightpink;
    }
`

const BotaoVerde = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
    border: 1px solid green;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    &:hover {
        background-color: lightgreen;
    }
`

const H3 = styled.h3`
    display: inline;

`

const TelaInicial = () => {
    const [pessoas, setPessoas] = useState ([])

    useEffect (() => {
        getPessoas()
    }, [])

    const getPessoas = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/monica-araujo/person`)
            .then((res) => {
                setPessoas(res.data.profile)
            })
            .catch((error) => {
                alert('deu ruim')
            })
    }

    const escolhePessoa = (escolhe) => {
        const body = {
            id: pessoas.id,
            choice: escolhe
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/monica-araujo/choose-person`, body)
            .then(() => {
                getPessoas()
            })
            .catch((error) => { 
                alert(error.res)

            })
    }

    return (
        <Main>
            <All>
                <Img src={pessoas.photo}/>
                <Label>
                    <div>
                        <H3>{pessoas.name}</H3>
                        <span>{` , ${pessoas.age}`}</span>
                    </div>
                    <p>{pessoas.bio}</p> 
                </Label>
                <Botoes>
                    <BotaoVermelho onClick={() => escolhePessoa(false)}><img src={X} width="30px"/></BotaoVermelho>
                    <BotaoVerde onClick={() => escolhePessoa(true)}><img src ={Coracao} width="40px"/></BotaoVerde>
                </Botoes>
            </All>
        </Main>
    )

}

export default TelaInicial