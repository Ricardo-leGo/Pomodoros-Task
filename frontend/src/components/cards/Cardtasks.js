import React, { useContext } from 'react'
import {ctxContext} from  '../../context'
import styled from 'styled-components'
import Pomodorotool     from '../Pomodorotool'
import { NavLink } from 'react-router-dom'


const CardContainer = styled.div`
font-family: 'Baloo 2', cursive;

    margin-top:1%;
    background-color: green;
    width:20vw;
    padding:1%; 
    display:flex;
    flex-flow:column wrap;
    justify-content:space-between;
    align-items:center;
    border-radius:15px;

`
const WrapperSuperior = styled.div`
width:100%;

display:flex;
justify-content: space-between;
align-items:baseline;


`
const WrapperInf = styled.div`
width:100%;

display:flex;
justify-content: space-between;
align-items:baseline;

`

function Cardtasks({
    key,
    description,
    done,
    initialized,
    nametask,
    pending,
    timing,
    typetask,
    author,
    id,
    deletefunction}) {
    return (
        <CardContainer key={key}>
            <WrapperSuperior>
            <h4>Name:{nametask}</h4>
            <p>Categoria:{typetask}</p>
            </WrapperSuperior>

            <Pomodorotool/>
            <WrapperInf>
            <p>`Status: ${pending}`</p>
            <button id={id} onClick={(e)=>deletefunction(e)}>X</button>
            </WrapperInf>

        </CardContainer>
    )
}

export default Cardtasks
