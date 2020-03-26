import React, {useContext} from 'react'
import { ctxContext } from '../../context'

export default function New(props) {
    const context = useContext(ctxContext)
    const {state:{task}} = context
    console.log(task);
    
    return (
        <ctxContext.Consumer>
            {
                context =>(
                    <>
                    <h1>New</h1>
                    <button type="button" id="buttonNew">New +</button>
                    <form className="newTaskForm" id="newTaskForm">
                        <input
                        type="text"
                        name="nametask"
                        placeholder="Tarea"
                        id="taskname"/>
                        <input
                        type="text"
                        name="timing"
                        placeholder="Duracion"
                        id="timingtask"/>
                        <input
                        type="text"
                        name="typetask"
                        placeholder="Tipo de Tarea"
                        id="typetask"/>
                        <input
                        type="text"
                        name="Description"
                        placeholder="Tarea"
                        id="Description"/>
                        <input
                        type="submit"
                        value="Crear"/>
                     </form>
                    </>
                )
            }
        </ctxContext.Consumer>
    )
}