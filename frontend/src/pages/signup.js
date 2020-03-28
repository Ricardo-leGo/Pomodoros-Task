import React, {useContext}          from 'react'
import { ctxContext }               from '../context'
import UserForm                     from '../components/Signup/Formulario'


function Signup(props) {
    const context = useContext(ctxContext)
    let pagelink = props.match.path.split('/')[1]
    const {Signup, Login,submitUser,  submitLogin} = context



    return (

        <ctxContext.Consumer>
            {
                context =>(
                    <>
                        <h1>{pagelink}</h1>     
                        <UserForm 
                        page={pagelink}  
                        asfunction={pagelink==="signup"? Signup:Login} 
                        userfunction={submitUser}
                        loginfunction= {submitLogin}
                        
                        /> 
                    </>
                )
            }
        </ctxContext.Consumer>
    )


    
}
export default  Signup