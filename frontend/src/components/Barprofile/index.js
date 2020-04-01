import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ctxContext } from '../../context'
import styled from 'styled-components'


const BarrProfile = styled.div`
background-color:#735567;
height:100vh;
width:25vw;
display:flex;
flex-flow:column wrap;
align-itmes:center;
justify-content:center;
text-align:center;
font-family: 'Baloo 2', cursive;

`

function Barprofile(props) {
    const context = useContext(ctxContext)
    let [doneTasks, setDoneTask]= useState([])
    
     const {userTasks} = context.state


    return (
        <BarrProfile>
            
                <h2>{context.state.user}</h2>
                <h2>Terminadas: {userTasks.length}</h2>
                <h2>No iniciadas</h2>
                <h2>Iniciadas</h2>
                <Link to="/logout">Salir</Link>

        </BarrProfile>
    )
}

export default Barprofile
