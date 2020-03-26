import React, {useContext} from 'react'
import  { ctxContext } from '../../context'
import { NavLink, withRouter } from 'react-router-dom'

function Navbar() {
    const options = useContext(ctxContext)
    return (
            <ctxContext.Consumer>
                {context =>(
                    <>
                    <NavLink exact to='/'>Home</NavLink>|
                    <NavLink exact to='/signup'>signup</NavLink>|
                    <NavLink exact to='/login'>login</NavLink>|
                    <NavLink exact to='/profile'>Profile</NavLink>|
                    <NavLink exact to='/taskdetails'>taskdetails</NavLink>|
                    </>
                    
                )}
            </ctxContext.Consumer>
    )
}
export default withRouter(Navbar)


