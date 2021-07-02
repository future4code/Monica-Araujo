import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Coracao from '../img/coracao.png'
import X from '../img/x.png'
import {BASE_URL} from "../constantes/url"
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
    text-align: center;
`

const Botoes = styled.div`
    display: flex;
    align-items: center;
    padding-top: 50px;
    justify-content: space-around;
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

function TelaInicial () {
    const [profile, setProfile] = useState ({})

    useEffect (() => {
        getPerfil()
    }, [])

    const getPerfil = () => {
        axios.get(`${BASE_URL}/person`)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((error) => {
                alert(error.data)
            })
    }

    const escolhePessoa = (escolhe) => {
        const body = {
            id: profile.id,
            choice: escolhe
        }

        axios.post(`${BASE_URL}/choose-person`, body)
            .then((res) => {
                getPerfil()
            })
            .catch((error) => { 
                alert(error.res)

            })
    }

    return (
        <Main>
            <All>
                <Img src={profile.photo}/>
                <Label>
                    <p>{profile.name}</p>
                    <p>{profile.age}</p>
                    <p>{profile.bio}</p> 
                    <Botoes>
                        <BotaoVermelho onClick={() => escolhePessoa(false)}><img src={X} width="30px"/></BotaoVermelho>
                        <BotaoVerde onClick={() => escolhePessoa(true)}><img src ={Coracao} width="40px"/></BotaoVerde>
                    </Botoes>
                </Label>
            </All>
        </Main>
    )

}

export default TelaInicial