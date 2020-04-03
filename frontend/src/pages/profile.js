import React, { Component } from 'react'
import { ctxContext }   from '../context'
import styled from 'styled-components'
import { deleteTask, createTask }     from '../services'
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
let firstState = []
        
 class Profile extends Component {

     state={
         tasks: [],
         
         task: {
            nametask:"",
            typetask:"",
            timing:"",
            description:"",
            done:false,
            pending:true,
            initialized:false,
            parts:[]
          }
     }

     componentDidMount(){
        const {isUserLogged} = this.context.state
            if(isUserLogged!==true){
                this.props.history.push('/login')
            }else{      
                const {userTasks} = this.context.state
                firstState=userTasks
                this.setState({tasks:userTasks})
            }   
        }

    changeState(updatedTasks){
        if (updatedTasks !== undefined) {
            
            this.context.state.userTasks=updatedTasks
            this.setState({tasks:updatedTasks}) 
        }else{
            const {userTasks}= this.context.state
            this.setState({tasks:userTasks})
        }
    }

    deleteitemTask= async e => {            
        const {data:{updatedTasks}}  = await deleteTask(e);
        this.changeState(updatedTasks)
        firstState=updatedTasks

    }

    findTaskbyName = ({ target }) => {
         const { value } = target
         const { tasks } = this.state
         let filteredTasks = []
         value === '' ?
            filteredTasks = firstState:
            filteredTasks = tasks.filter(el => {
             return el.nametask
                 .toLowerCase()
                 .includes(value.toLowerCase()) === true ?
                 el : false
         })
         this.context.state.userTasks=filteredTasks
         this.setState({ tasks: filteredTasks })       
        }
        
     
     fillNew = ({ target }) => {
        const { task } = this.state
        const { value, name } = target
        task[ name ] = value
        this.setState({ task }) 
         
     }
    
     submitTask = async (e) => {
            
         e.preventDefault();
        const { user } = this.context.state
         const { task } = this.state
         task.user = user
         const { data: { allTasksUser } } = await createTask(task)
         this.context.state.userTasks=allTasksUser
         this.setState({ tasks: allTasksUser })    
         firstState=allTasksUser
     }
     

  
        render() {
            if( this.state.tasks.length<this.context.state.userTasks.length ||
                this.state.tasks.length>this.context.state.userTasks.length)
                {
                this.changeState()
                }
            return (
                <ctxContext.Consumer>
                        {context => (
                        <Profilecontainer>
                            <Barprofile/>
                            <AuxiliarContainer>
                            <TasksTools>    
                                    <New fill={this.fillNew} newTask={this.submitTask}/>
                                    <Search filter={this.findTaskbyName}/>
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