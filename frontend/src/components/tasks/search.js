import React, {useContext} from 'react'
import { ctxContext } from '../../context'

export default function Search(props) {
    const context = useContext(ctxContext)
    const {state:{task}} = context
    console.log(task);
    
    return (
        <ctxContext.Consumer>
            {
                context =>(
                    <>
                        <div>
                            <h1>Componenente busqueda</h1>
                            <form>
                                <input
                                type="text"
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