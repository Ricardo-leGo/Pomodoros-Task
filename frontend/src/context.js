import React, { createContext,Component } from 'react'
import { withRouter } from 'react-router-dom'

export const ctxContext = createContext()

class ProviderClass extends Component {
  
  
  state = {
    pruebas:'holaaaaa',
    isUserExist:false,
    isUserLogged:false,
    
    Userform:{
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }  
      Login=(e)=>{
        let { Userform } = this.state
         const {name, value} = e.target
         Userform[name] = value
         this.setState({Userform})}

      Signup=(e)=>{
        const { Userform } = this.state
        const {name, value} = e.target
        Userform[name] = value
        this.setState({Userform})
      }
      submitUser = (e)=>{
        e.preventDefault();
            console.log(e);
          console.log("me ejecuté");
          
      }

  render() {
    const {state,Signup, Login, submitUser} = this
    return (
      <ctxContext.Provider
        value={{state, Signup, Login, submitUser}}>
        {this.props.children}
      </ctxContext.Provider>
    )
  }
}

export default withRouter(ProviderClass)



