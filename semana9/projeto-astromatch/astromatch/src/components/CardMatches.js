import React from 'react'
import styled from 'styled-components'
import Pessoa from '../img/pessoa.jpg'

const Imagem = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 20px;

`
const MainCard = styled.button`
    margin-top: 15px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-top: 10px;
    width: 100%;
    background-color: white;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #d3d3d3;
    }
`

const CardMatches = () => {
    return (
        <MainCard>
            <Imagem src={Pessoa}/>
            <p>Brooke Lynn Hytes</p>
        </MainCard>
    )

}
export default CardMatches