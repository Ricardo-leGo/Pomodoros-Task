import React, { Component, useContext } from 'react'
import { ctxContext }   from '../context'
import styled from 'styled-components'
import { deleteTask }     from '../services'
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
        top:0;
        `

    const AuxiliarContainer = styled.div`
        width:70%;
        box-sizing:border-box;`
    const Tasktimer = styled.div`
    position:relative;
    width:70%
    top:1%;
    left:-4%;
    heigth:30vh;
    overflow-y:scroll;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    `


    const TasksTools = styled.div`
        width:100%;
        heigth:40vh;
        padding-top:2.5%;
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
                
                this.setState(this.state.tasks= userTasks)
            }   
        }

        changeState(updatedTasks){
            if(updatedTasks!==undefined){
                this.context.state.userTasks=updatedTasks
                this.setState({tasks:updatedTasks})
                console.log(this.state.tasks);
                console.log('Hola ');
                
                
                
            }else{
                const {userTasks}= this.context.state
                this.setState({tasks:userTasks})
                console.log(this.state.tasks);
                
            }
        }

        deleteitemTask= async e => {
            
            const {data:{updatedTasks}}  = await deleteTask(e);
            this.changeState(updatedTasks)
                
     
        }
        
        
        render() {
            if(this.state.tasks.length<this.context.state.userTasks.length ||this.state.tasks.length>this.context.state.userTasks.length){
                this.changeState()
            }else {
                console.log(this.state.tasks);
                
            }
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
                       
                                 {   
                    this.state.tasks.map((el,i)=>(
                            
                    <Cardtasks
                    key             =       {         i             }    
                    description     =       {   el.description      }
                    done            =       {   el.done             }
                    initialized     =       {   el.initialized      }
                    nametask        =       {   el.nametask         }
                    pending         =       {   el.pending          }
                    timing          =       {   el.timing           }
                    typetask        =       {   el.typetask         }
                    id              =       {   el._id              }
                    author          =       {   el.author           }
                    deletefunction  =       {   this.deleteitemTask }
                        />
                        ))
                                }
                                
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