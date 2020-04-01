import React from 'react'
import styled from 'styled-components'
import Pomodorotool     from '../Pomodorotool'
import { NavLink } from 'react-router-dom'


const CardContainer = styled.div`
    background-color: green;
    width:20vw;

`



function Cardtasks() {
    return (
        <CardContainer>
            <div id="superiorItems" >
            <h4>Task Name</h4>
            <p>Category</p>
            </div>

            <Pomodorotool/>
            <p>Status</p>
            <NavLink to={`/task/id`}>Details</NavLink>
        </CardContainer>
    )
}

export default Cardtasks
