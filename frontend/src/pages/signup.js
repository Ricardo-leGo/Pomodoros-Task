import React, {useContext} from 'react'
import { ctxContext } from '../context'
import UserForm from '../components/Signup/Formulario'

function Signup(props) {
    const context = useContext(ctxContext)
    const pagelink = props.match.path.split('/')[1]
    const {Signup, Login,submitUser} = context

    
    return (
        <ctxContext.Consumer>
            {
                context =>(
                    <>
                <h1>{pagelink}</h1>     
                    <UserForm 
                    page={pagelink} 
                    asfunction={pagelink==="signup"? Signup:Login} 
                    userfunction={submitUser}/> 
                    </>
                )
            }


        </ctxContext.Consumer>
    )
}

export default  Signup

