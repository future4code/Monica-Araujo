import React from 'react'
import Pessoa from '../img/pessoa.jpg'
import styled from 'styled-components'
import Coracao from '../img/coracao.png'
import X from '../img/x.png'

const Main = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`
const Img = styled.img`
    position: absolute;
    align-items: center;
    padding-left: 25px;
    padding-top: 15px;
    
`

const Label = styled.label`
    position: absolute;
    top: 330px;
    color: white;
    width: 94%;
    text-align: center;
`

const Botoes = styled.div`
    display: flex;
    align-items: center;
    padding-top: 40px;
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

const TelaInicial = () => {
    return (
        <div>
            <Main>
                <div>
                    <Img src={Pessoa} width="350px" height="400px"/>
                    <Label>
                        <h1>Brooke Lynn Hytes</h1>
                        <p>Se você curte drag, shantay you stay, se não... Sashay away!</p>
                        <Botoes>
                            <BotaoVermelho><img src={X} width="30px"/></BotaoVermelho>
                            <BotaoVerde><img src ={Coracao} width="40px"/></BotaoVerde>
                        </Botoes>
                    </Label>
                </div>
            </Main>
        </div>
    )

}

export default TelaInicial