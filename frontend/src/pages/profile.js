    import React, { Component, useContext } from 'react'
    import { ctxContext }   from '../context'
    import Pomodorotool     from '../components/Pomodorotool'
    import Barprofile       from '../components/Barprofile'
    import New              from '../components/tasks/new'
    import Search           from '../components/tasks/search'
    import History          from '../components/tasks/history'
        
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
                <div>
                    <h1>Profile</h1> 
                    <Barprofile/>
                        <New  
                        inputs= {context.newTasks} 
                        createNewTask={context.submitTask}/>
                    <Search/>
                    <History/>
                    <Pomodorotool/>
                </div>
                )      
            }
            </ctxContext.Consumer>    
             )
        }
    }
    export default Profile
    
Profile.contextType = ctxContext