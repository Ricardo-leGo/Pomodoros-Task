import React, {useState} from 'react'
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
            console.log(PauseValues);
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
                console.log(Timer);     
        }
        const ResetInterval = () => {
        }
    return (
        <div className="pomodoroTimer">          
            <h1> Pomodoro Timer</h1>
            <h3 id="pause"> Minutos: {countInTimeout}:{count}</h3>
            <select  onChange={AsignTime}>
                    <option>10</option>
                    <option>15</option>
                    <option>30</option>

            </select>
            <input type="button" value= "Play" onClick={countdown}/>
            <input  type="button" value= "Pause" onClick={PauseInterval}/>
            <input type="button" value= "Stop" onClick={StopInterval}/>
            <input type="button" value= "Reset" />
            
        </div>
    )
}
