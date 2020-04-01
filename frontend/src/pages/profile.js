import React, { Component, useContext } from 'react'
import { ctxContext }   from '../context'
import styled from 'styled-components'
import { alltasks }     from '../services'
import Barprofile       from '../components/Barprofile'
import New              from '../components/tasks/new'
import Search           from '../components/tasks/search'
import History          from '../components/tasks/history'
import Cardtasks from '../components/cards/Cardtasks'



    const Profilecontainer = styled.div`
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        width:100vw;
        margin:0;
        padding:0;
        position:absolute;
        left:0;
        top:0;`
    const AuxiliarContainer = styled.div`
        width:70%;
        box-sizing:border-box;`
    const Tasktimer = styled.div`    
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
     state={
         tasks:[]
     }
     componentDidMount(){
        const {isUserLogged} = this.context.state
            if(isUserLogged!==true){
                this.props.history.push('/login')
            }else{      
                const {userTasks} = this.context.state
                this.setState({tasks: userTasks})
                // const allUserTasks = await alltasks()
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
                                    <Cardtasks/>
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