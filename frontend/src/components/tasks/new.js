import React, {useContext} from 'react'
import { ctxContext } from '../../context'

export default function New({createNewTask,inputs}) {
    const context = useContext(ctxContext)
                const creatTask = ( e ) => {
                    createNewTask(e)
                }
    return (
        <ctxContext.Consumer>
            {
                context =>(
                    <>
                    <h1>New</h1>
                    <button type="button" id="buttonNew">New +</button>
                    <form className="newTaskForm" id="newTaskForm" onSubmit={creatTask}>
                        <input
                        type="text"
                        name="nametask"
                        placeholder="Tarea"
                        id="taskname"
                        onChange={inputs}
                        />
                        <input
                        type="time"
                        name="timing"
                        placeholder="Duracion"
                        id="timingtask"
                        step="3"
                        onChange={inputs}
                        />
                        <select  name="typetask" onChange={inputs}>
                            Categoria
                            <option value="">Categoria</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                        <input
                        type="text"
                        name="description"
                        placeholder="Description"
                       
                        id="Description"
                        onChange={inputs}
                        />
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