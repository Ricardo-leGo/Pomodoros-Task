import React from 'react'
import AUTH_SERVICES from '../../services'

 function UserForm({asfunction, page, userfunction}) {
        const submitTocontext = (e)=>{
                userfunction(e)
                .then(res=>res).catch(err=>err)
        }
        
    return (
        <>
        <form onSubmit={submitTocontext} >
            
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
        placeholder="Password"
        id="password"
        onChange={asfunction}
        />

        { page !== "login" && (
        <input 
        name="confirmPassword"
        type ="password"
        placeholder="Confirm Password"
        id="confirmPassword"
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