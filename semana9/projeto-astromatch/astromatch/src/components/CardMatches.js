import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {BASE_URL} from "../constantes/url"
import axios from 'axios'


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
function CardMatches() {

    const [matches, setMatches] = useState([])

    useEffect(()=>{
        getMatches()
    }, [])
    

    const getMatches = () =>{
        axios (`${BASE_URL}/matches`)
        .then((res) =>{
            setMatches(res.data.matches)
        })
        .catch((err) =>{
            alert(err)
        })
    }

    const mapMatches = matches.map((profile) =>{
        return <MainCard key={profile.id}>
            <Imagem src={profile.photo}/>
            {profile.name}
        </MainCard>
    })

return (
    {mapMatches}
    )

}
export default CardMatches