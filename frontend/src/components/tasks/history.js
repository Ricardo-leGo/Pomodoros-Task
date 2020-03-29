import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import * as V from 'victory';


import styled from 'styled-components'

const MetricsWarper = styled.div`
display:flex;
justify-content:center;
align-items:center;

`
const BtnMetrics = styled.button`
    height:100%;
    width:10vw;
    border:transparent;
    color:#FFF8E1;

    background-color:#735567;
    border-radius:15px;
    font-size:1.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;


`
export default class History extends Component {
    render() {
        return (
            <MetricsWarper>
                    <BtnMetrics type="button">Metricas</BtnMetrics>
            </MetricsWarper>
        )
    }
}
