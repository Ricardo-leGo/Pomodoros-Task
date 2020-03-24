import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ProviderClass from './context'
import Routes from './Router';
import * as serviceWorker from './serviceWorker';

function ContextFull(){
    return (
        <BrowserRouter>
            <ProviderClass>
                    <Routes/>
            </ProviderClass>
        </BrowserRouter>
    )
}

ReactDOM.render(<ContextFull/>, document.getElementById('root'));

serviceWorker.unregister();
