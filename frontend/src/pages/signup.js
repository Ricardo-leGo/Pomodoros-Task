import React, {useContext}          from 'react'
import { ctxContext }               from '../context'
import UserForm                     from '../components/Signup/Formulario'
import styled                       from 'styled-components'
 
const Containerhome = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:space-between;
align-items:center;
margin-top:-2%;
margin-left:5%;
`
const Pomodoro = styled.h1`
width:60%;  
text-align:center;
font-size:8rem;
text-transform:capitalize;
color:#2681A3;
letter-spacing:4rem;


font-family: 'Cute Font', cursive;
`

const FormAuth = styled.div`

font-family: 'Baloo 2', cursive;

width:35vw;
height:100vh;
text-align:center;
box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
z-index:5000;
border-radius:100px 0 0 100px;
background: rgba(224,128,143,1);
background: -moz-linear-gradient(top, rgba(224,128,143,1) 0%, rgba(224,128,143,1) 20%, rgba(255,210,193,1) 78%, rgba(255,210,193,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(224,128,143,1)), color-stop(20%, rgba(224,128,143,1)), color-stop(78%, rgba(255,210,193,1)), color-stop(100%, rgba(255,210,193,1)));
background: -webkit-linear-gradient(top, rgba(224,128,143,1) 0%, rgba(224,128,143,1) 20%, rgba(255,210,193,1) 78%, rgba(255,210,193,1) 100%);
background: -o-linear-gradient(top, rgba(224,128,143,1) 0%, rgba(224,128,143,1) 20%, rgba(255,210,193,1) 78%, rgba(255,210,193,1) 100%);
background: -ms-linear-gradient(top, rgba(224,128,143,1) 0%, rgba(224,128,143,1) 20%, rgba(255,210,193,1) 78%, rgba(255,210,193,1) 100%);
h1{text-transform:capitalize; padding-top: 1%;  color:#735567; font-size:3rem;
}
input[type=submit]{
    border: transparent;
    color:#735567;
    font-size:1.5rem;
    text-transform:capitalize;}
    font-family: 'Baloo 2', cursive;

}
`
function Signup(props) {
    const context = useContext(ctxContext)
    let pagelink = props.match.path.split('/')[1]
    const {Signup, Login,submitUser,  submitLogin} = context



    return (

        <ctxContext.Consumer>
            {
                context =>(
                    <Containerhome>
                    <Pomodoro><br/><br/>Pomodoro<br/> tasks</Pomodoro>
                    <FormAuth>
                        <h1>{pagelink}</h1>
                        <UserForm 
                        page={pagelink}  
                        asfunction={pagelink==="signup"? Signup:Login} 
                        userfunction={submitUser}
                        loginfunction= {submitLogin}
                        
                        /> 
                    </FormAuth>
                </Containerhome>
                )
            }
        </ctxContext.Consumer>
    )


    
}
export default  Signup