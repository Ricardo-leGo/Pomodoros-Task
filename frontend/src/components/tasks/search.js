import React, {useContext} from 'react'
import { ctxContext } from '../../context'
import styled from 'styled-components'

const SearchForm = styled.form`

display:flex;
flex-flow:column wrap;
justify-content:space-around;
width:50%;
background-color:#735567;
border-radius:15px;
h1{
    text-align:center;
    color:#FFF8E1;

}
#searchbtn{
    height:15%;
    width:50%;
    margin:0 auto;
    border:transparent;
    background-color:#735567;
    color:#FFF8E1;
    border-radius:15px;
    font-size:1.4rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}
#searchinput{
    height:30%;
    width:80%;
    margin:0 auto;
    text-align:center;
    border:transparent;
    font-size:1.4rem;
    color:#FFF8E1;

    background-color:transparent;
}
`

export default function Search(props) {
    const context = useContext(ctxContext)
    const {state:{task}} = context
    
    return (
        <ctxContext.Consumer>
            {
                context =>(
                    <>
                            <SearchForm>
                            <h1>Busca</h1>
                                <input
                                type="search"
                                name="searchinput"
                                placeholder="Busca las tareas"
                                id="searchinput"
                                />
                                <input type="button" id="searchbtn" value="Buscar"/>
                            </SearchForm>
                    </>
                )
            }
        </ctxContext.Consumer>
    )
}