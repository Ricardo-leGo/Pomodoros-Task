import React, {useContext} from 'react'
import  { ctxContext } from '../../context'
import { NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'

    const NavContainer = styled.div`
        position:absolute;
        top:1%;
        right:1%;
        z-index:10000;
        width:45%;
        text-transform:capitalize;
        text-align:right;
        margin-top:-.5%;`
    const Anchor = styled(NavLink)`
            font-family: 'Cute Font', cursive;
            text-decoration:none;
            color:#2681A3;
            font-size:1.4rem;
            margin: 0 3%;`
function Navbar() {
    const options = useContext(ctxContext)
    const {isUserLogged} = options.state
        return (
            <ctxContext.Consumer>
                {context =>(
                    <NavContainer>
                    <Anchor exact to='/'>  Home </Anchor>
                    <Anchor exact to='/signup'>  signup </Anchor>
                    <Anchor exact to='/login'>  login </Anchor>
                    {isUserLogged === true && ( <>
                    <Anchor exact to='/profile'>  Profile </Anchor>
                    <Anchor exact to='/taskdetails'>  taskdetails </Anchor>
                    <Anchor exact to='/LogOut'>  LogOut</Anchor>
                    </>
                    )}
                    </NavContainer>
                    
                )}
            </ctxContext.Consumer>
    )
}
export default withRouter(Navbar)


