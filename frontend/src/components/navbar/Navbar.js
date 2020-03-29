import React, {useContext} from 'react'
import  { ctxContext } from '../../context'
import { NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
    background-color:cyan;
        position:absolute;
        top:1%;
        right:1%;
        z-index:10000;
`


function Navbar() {
    const options = useContext(ctxContext)
    const {isUserLogged} = options.state
        return (
            <ctxContext.Consumer>
                {context =>(
                    <NavContainer>
                    <NavLink exact to='/'>  Home |</NavLink>
                    <NavLink exact to='/signup'>  signup |</NavLink>
                    <NavLink exact to='/login'>  login |</NavLink>
                    {isUserLogged === true && ( <>
                        <NavLink exact to='/profile'>  Profile |</NavLink>
                        <NavLink exact to='/taskdetails'>  taskdetails |</NavLink>
                        <NavLink exact to='/LogOut'>  LogOut|</NavLink>
                    </>
                    )}
                    </NavContainer>
                    
                )}
            </ctxContext.Consumer>
    )
}
export default withRouter(Navbar)


