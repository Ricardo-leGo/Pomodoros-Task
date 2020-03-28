import React from 'react'

 function UserForm({asfunction, page, userfunction, loginfunction}) {
        const submitUser =  (e)=>{
            userfunction(e)
        }
        const submitLogin =  (e)=>{
            loginfunction(e)
        }

        
    return (
        <>
        <form onSubmit={page!=="login"?submitUser:submitLogin} >
            
        <input 
        name="name"
        type ="text"
        placeholder="Name"
        id="name"
        onChange={asfunction}
        />

        <input 
        name="email"
        type ="email"
        placeholder="Email"
        id="email"
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
        </form>
        </>
       
    )
}
export default UserForm