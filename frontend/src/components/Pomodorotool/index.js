import React, {useState} from 'react'
import styled from 'styled-components'

const WapperTimer = styled.div`
box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;

    width:100%;
    border-radius:15px;
    margin:0;
    padding:2%;
    display:flex;
    flex-flow:column wrap;
    justify-content:space-center;
    box-sizing:border-box;
    h1{
        text-align:center;
        font-size:3rem;
        margin:-2%;
    }
    `
    

const WrapperTools = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:space-evenly;
box-sizing:border-box;
      
    select,input{
        font-family: 'Baloo 2', cursive;

        border-color:transparent;
        background-color:gray;
        color:white;
    }


`
export default function Index() {
    let TimeInit            = '00'
    let minutes             = 0
    let seconds             = 60
    let auxiliartime        = 0


    let [timeFromUser, settimeFromUser] = useState()
    let [count, setCount] = useState(TimeInit);
    let [countInTimeout, setCountInTimeout] = useState(TimeInit);
    let [Timer, setTimer] = useState();

    const  AsignTime= (e) =>{
        TimeInit = e.target.value
        setCountInTimeout(countInTimeout = TimeInit)
        setCount(count = '00')
    }
        const countdown= (pauseSeconds, pauseMinutes)=>{
            if(!Timer){
                minutes = parseInt(countInTimeout)-1
                setCountInTimeout(countInTimeout= minutes)
                    if (minutes<=0){
                        minutes =`0${9}`
                setCountInTimeout(countInTimeout= minutes)} 
                setCount(count = seconds-1)
                Timer =  setInterval(() => {
                    auxiliartime = auxiliartime+1
                    seconds = seconds-1
                    setCount(count= seconds)
                    if (seconds< 10)setCount(count = `0${seconds}`)
                    //Minutos ------------------------------------------------------------------------------------
                    if (auxiliartime%60 === 0){
                        seconds = 59
                        setCount(count= seconds)
                        minutes = parseInt(minutes) -1
                    setCountInTimeout(countInTimeout = minutes)
                    if(countInTimeout<=10){setCountInTimeout(countInTimeout= `0${minutes}`)
                    if(countInTimeout<=0&&seconds<=0 )clearInterval(Timer)
                }
            }
                //Segundos -----------------------------------------------------------------------------------
            }, 1000)
            setTimer(Timer)            
            }
        }         
        const PauseInterval = (e)=>{
            let PauseValues = document.getElementById('pause').innerText.split(':').map(el=> parseInt(el))
            setCountInTimeout(countInTimeout=parseInt(PauseValues[1]))
            setCount(count=parseInt(PauseValues[2]))
            clearInterval(Timer)
            setTimer(Timer=false)
         } 
        const StopInterval = ()=>{
                clearInterval(Timer)
                setTimer(Timer =false)
                setCount(count='00')
                setCountInTimeout(countInTimeout='00')
        }
        const ResetInterval = () => {
        }
    return (
        <WapperTimer>          
            <h1 id="pause">{countInTimeout}:{count}</h1>
            <WrapperTools>
            <select  onChange={AsignTime}>
                    <option>10</option>
                    <option>15</option>
                    <option>30</option>

            </select>

            <input id="count" type="button" value= "Play" onClick={countdown}/>
            <input  type="button" value= "Pause" onClick={PauseInterval}/>
            <input type="button" value= "Stop" onClick={StopInterval}/>
            <input type="button" value= "Reset" />
            </WrapperTools>

            
        </WapperTimer>
    )
}
