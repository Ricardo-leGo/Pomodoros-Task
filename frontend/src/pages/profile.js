    import React, { Component } from 'react'
    import Pomodorotool from '../components/Pomodorotool'
    import Barprofile from '../components/Barprofile'
import New from '../components/tasks/new'
import Search from '../components/tasks/search'
import History from '../components/tasks/history'
    
 class profile extends Component {
   
        
        render() {
            return (
                <div>
                    <h1>Profile</h1> 
                    <Barprofile/>
                    <New/>
                    <Search/>
                    <History/>
                    <Pomodorotool/>
                </div>
            )
        }
    }
    export default profile
    