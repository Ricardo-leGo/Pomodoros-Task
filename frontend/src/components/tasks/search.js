import React, {useContext} from 'react'
import { ctxContext } from '../../context'

export default function Search(props) {
    const context = useContext(ctxContext)
    const {state:{task}} = context
    
    return (
        <ctxContext.Consumer>
            {
                context =>(
                    <>
                        <div>
                            <h1>Componenente busqueda</h1>
                            <form>
                                <input
                                type="search"
                                name="searchinput"
                                placeholder="Busca las tareas"
                                id="searchinput"
                                />
                                <input type="button" value="Buscar"/>
                            </form>
                        </div>
                    </>
                )
            }
        </ctxContext.Consumer>
    )
}