import React from 'react'
import { Link } from 'react-router-dom'

function Barprofile() {
    return (
        <div>
                <h2>User name</h2>
                <h2>Terminadas</h2>
                <h2>No iniciadas</h2>
                <h2>Iniciadas</h2>
                <Link to="/logout">Salir</Link>

        </div>
    )
}

export default Barprofile
