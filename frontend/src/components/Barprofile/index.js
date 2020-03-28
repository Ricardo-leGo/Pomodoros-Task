import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ctxContext } from '../../context'
function Barprofile() {

    const context = useContext(ctxContext)
    
    
    return (
        <div>
            
                <h2>{context.state.user}</h2>
                <h2>Terminadas</h2>
                <h2>No iniciadas</h2>
                <h2>Iniciadas</h2>
                <Link to="/logout">Salir</Link>

        </div>
    )
}

export default Barprofile
