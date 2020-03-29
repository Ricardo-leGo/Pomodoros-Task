import React, { Component, useContext } from 'react'
import { ctxContext }   from '../context'
import styled from 'styled-components'
import Pomodorotool     from '../components/Pomodorotool'
import Barprofile       from '../components/Barprofile'
import New              from '../components/tasks/new'
import Search           from '../components/tasks/search'
import History          from '../components/tasks/history'



    const Profilecontainer = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    width:100vw;
    margin:0;
    padding:0;
    position:absolute;
    left:0;
    top:0;
    `

    const AuxiliarContainer = styled.div`
    width:70%;
    box-sizing:border-box;
    `

    const Tasktimer = styled.div`
    background-color:yellow;
    
    `
    const TasksTools = styled.div`
    width:100%;
    heigth:40vh;
    padding-top:3%;
    margin-left:-5%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
    `

        
 class Profile extends Component {
     componentDidMount(){
        const {isUserLogged} = this.context.state
            if(isUserLogged!==true){
                this.props.history.push('/login')
            }   
        }
        render() {

            return (
                <ctxContext.Consumer>
                {context => (
                <Profilecontainer>
                    <Barprofile/>
                        <AuxiliarContainer>
                            <TasksTools>    
                        <New inputs= {context.newTasks} createNewTask={context.submitTask}/>
                                <Search/>
                                <History/>
                        </TasksTools>

                        <Tasktimer>
                                <Pomodorotool/>
                        </Tasktimer>
                        </AuxiliarContainer>

                </Profilecontainer>
                )      
            }
            </ctxContext.Consumer>    
             )
        }
    }
    export default Profile
    
Profile.contextType = ctxContext