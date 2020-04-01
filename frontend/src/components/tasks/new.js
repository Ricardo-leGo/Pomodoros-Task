import React, {useContext} from 'react'
import { ctxContext } from '../../context'
import styled from 'styled-components'

const NewForm = styled.form`
display:flex;
flex-flow:column wrap;
justify-content:center;
texxt-align:center;
width:30%;
height:40vh;
background-color:#735567;
border-radius:15px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;


input, select, option{
    text-align:center;
    height:15%;
    border:transparent;
    margin:2%;
    font-size:1.4rem;
    color:#FFF8E1;
    background-color:transparent;
}


input[type="submit"]{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    margin:0 auto;
    width:70%;
    
    border-radius:15px;

}

`

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
                    <NewForm className="newTaskForm" id="newTaskForm" onSubmit={creatTask}>
                        <input
                        type="text"
                        name="nametask"
                        placeholder="Task Name"
                        id="taskname"
                        onChange={inputs}
                        />
                        <input
                        type="time"
                        name="timing"
                        id="timingtask"
                        step="3"
                        onChange={inputs}
                        />
                        <select  name="typetask" onChange={inputs}>
                            Categoria
                            <option value="">Category</option>
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
                        value="Create"/>
                     </NewForm>
                    </>
                )
            }
        </ctxContext.Consumer>
    )
}