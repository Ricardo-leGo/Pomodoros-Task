import React from 'react'
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

function Cardtasks() {
    return (
        <CardContainer>
            <WrapperSuperior>
            <h4>Task Name</h4>
            <p>Category</p>
            </WrapperSuperior>

            <Pomodorotool/>
            <WrapperInf>
            <p>Status</p>
            <NavLink to={`/task/id`}>Details</NavLink>
            </WrapperInf>

        </CardContainer>
    )
}

export default Cardtasks
