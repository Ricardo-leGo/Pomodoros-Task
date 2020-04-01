import React from 'react'
import styled from 'styled-components'


const Form = styled.form`
width:60%;
height:60%;
margin:0 auto;
display:flex;
flex-flow:column wrap;
justify-content:center;
align-items:center;

input{
    color:#735567;
    height:10%;
    width:95%;
    background-color:transparent;
    border-radius:15px;
    text-align:center;
    border-color:#FFF8E1;
    margin:3% auto;
    font-size:1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px
}
input[type=submit]{
    width:95%;
}
`


 function UserForm({asfunction, page, userfunction, loginfunction}) {
        const submitUser =  (e)=>{
            userfunction(e)
        }
        const submitLogin =  (e)=>{
            loginfunction(e)
        }
    return (
        <>
        <Form onSubmit={page!=="login"?submitUser:submitLogin} >
            
        <input 
        name="name"
        type ="text"
        placeholder="Name"
        id="name"
        required
        onChange={asfunction}
        />

        <input 
        name="email"
        type ="email"
        placeholder="Email"
        id="email"
        required
        onChange={asfunction}
        />

        <input 
        name="password"
        type ="password"
        minLength="3"
        placeholder="Password"
        id="password"
        required
        onChange={asfunction}
        />
{/* enderizado condicional basado en match.params para saber en qué página estamos, 
        Login o signup */}
        { page !== "login" && (
        <input 
        name="confirmPassword"
        type ="password"
        placeholder="Confirm Password"
        id="confirmPassword"
        minLength="3"
        required
        onChange = {asfunction}
        />
        )}

        <input 
        type="submit" value={page}/>
        </Form>
        </>
       
    )
}
export default UserForm