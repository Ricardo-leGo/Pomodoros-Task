import React, { createContext,Component }        from 'react'
import { withRouter }                            from 'react-router-dom'
import { SignupServices, 
         LoginServices}                          from './services/index'
import './index.css'




  export const ctxContext = createContext()

class ProviderClass extends Component {
  
 constructor(){
   super()
   this.initialState=this.state
 }
  state = {
    pruebas:'holaaaaa',
    isUserExist:false,
    // Cambia a isUserLogged:false
    isUserLogged:false,
    user:null,
    userTasks:[],
    task:{
      nametask:"",
      typetask:"",
      timing:"",
      description:"",
      done:false,
      pending:true,
      initialized:false,
      parts:[]
    },
    Userform:{
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }  
  componentDidMount =  () => { 
    this.initialState=this.state
  }
  
      Login=(e)=>{
        let { Userform } = this.state
         const {name, value} = e.target
         Userform[name] = value
         this.setState({Userform})
        }

      Signup=(e)=>{
        const { Userform } = this.state
        const {name, value} = e.target
        Userform[name] = value

        this.setState({Userform})
      }

      submitUser = async (e)=>{
        e.preventDefault();
        const { Userform } = this.state
        const { Userform:{password,confirmPassword} } = this.state
        if( password===""&&confirmPassword===""){
          alert("Llena todos lo campos")
          //Introducir accion que retroaloimente al usuario
        }else if(password==="" || confirmPassword===""){
          alert("No puedes enviar elementos vacios")
          //Introducir accion que retroaloimente al usuario
        }else if(password===confirmPassword){
          //Redireccion si hubo registro o no
        const {data:{msg,status} } = await SignupServices( Userform )
        status?this.props.history.push('/login'):this.props.history.push('/signup')
          console.log(`Message: ${msg}`, ` ||   The status is:${status}`);
        }else{
          alert("Son diferentes tus contraseñas")
          //Introducir accion que retroaloimente al usuario
        }
      }

      submitLogin = async (e) =>{
        e.preventDefault();
        const { Userform } = this.state
        const {data:{status, name, allTasksUser} } = await LoginServices(Userform)
        // Cambia is isUserLoggeda  isUserLogged:status 
          this.setState({ isUserLogged:status, user:name, userTasks:allTasksUser})
          this.props.history.push('/profile')      
        }


        logoutfunction= ()=>{
          console.warn("hola")
          const {initialState}=this
          this.setState(this.state = initialState)}

  render() {
    const {state, 
      Signup, 
      Login, 
      submitUser,
       submitLogin,
       submitTask, 
      logoutfunction} = this
    return (
      <ctxContext.Provider
        value={{state, 
        Signup, 
        Login, 
        submitUser, 
        submitLogin, 
        submitTask,
        logoutfunction}}>
        {this.props.children}
      </ctxContext.Provider>
    )
  }
}

export default withRouter(ProviderClass)



