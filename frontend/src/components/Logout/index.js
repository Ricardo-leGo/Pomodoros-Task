import React, { useContext } from 'react'
import {ctxContext} from '../../context'
import { Redirect } from 'react-router-dom';
export default function Index() {
const context = useContext(ctxContext)
    return (
    <>
    {context.logoutfunction()}
            <Redirect to='/'></Redirect>
    </>
    )
}