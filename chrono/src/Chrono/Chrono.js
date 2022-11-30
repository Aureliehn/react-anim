import React, { useEffect, useReducer } from 'react';
import "./Chrono.css";
import PauseImg from '../Images/pause.svg';
import PlayImg from '../Images/play.svg';
import ResetImg from '../Images/reset.svg';
import { useState } from 'react';

export default function Chrono() {
    const [sessionTime, setSessionTime] = useState(1500);
    const [ sessionTimeFixed, setSessionTimeFixed] = useState(1500);
  
    const [ breakTime, setBreakTime] = useState(300);
    const [ breakTimeFixed, setBreakTimeFixed] = useState(300);
  
    const [ workingChrono, setworkingChrono] = useState(false);

    const playPause = ()=>{
        setworkingChrono(!workingChrono)
    }
    const handleSession = e =>{
        const el = e.target;
        if(el.classList.contains('minus')){
            if(sessionTime/60 > 1){
                setSessionTime(sessionTime-60)
                setSessionTimeFixed(sessionTimeFixed-60)
            }
        }else if(el.classList.contains('plus')){
            if(sessionTime/60 > 1){
                setSessionTime(sessionTime+60)
                setSessionTimeFixed(sessionTimeFixed+60)
            }
        }
    }
    const handleBreak = e =>{
        const el = e.target;
        if(el.classList.contains('minus')){
            if(breakTime/60 > 1){
                setBreakTime(breakTime-60)
                setBreakTimeFixed(breakTimeFixed-60)
            }
        }else if(el.classList.contains('plus')){
            if(breakTime/60 > 1){
                setBreakTime(breakTime+60)
                setBreakTimeFixed(breakTimeFixed+60)
            }
        }
    }
    const resetfunc=()=>{
        if(workingChrono){
            setworkingChrono(!workingChrono)
            setSessionTime(sessionTimeFixed)
            setBreakTime(breakTimeFixed)
        }
    }
    const [state, dispatch] =useReducer(reducer);

    function reducer(state, action){
        switch(action.type){
            case 'TICK':
                if(sessionTime >= 0 ){
                    setSessionTime(sessionTime -1)
                } else if(breakTime >=1){
                    setBreakTime(-1)
                } else if (breakTime<=0 && sessionTime<=0 ){
                    setSessionTime(sessionTimeFixed)
                    setBreakTimeFixed(breakTimeFixed)
                }
        }
    }
    
    useEffect(()=>{
        let id;
        if(workingChrono){
            id = window.setInterval(()=>{
                dispatch({type:'TICK'})
            }, 1000)
        }
        return () =>{
            window.clearInterval(id)
        }
    },[workingChrono])
  return (
    <div className={workingChrono? "container-chrono anim-glow" :"container-chrono" }>
        <div className="container-config">
            <div className="box-btns session">
                <button className="minus" onClick={handleSession}>
                    -
                </button>
                <span>{sessionTimeFixed/60}</span>
                <button className="plus" onClick={handleSession}>
                    +
                </button>
            </div>
            <div className="box-btns break">
            <button className="minus" onClick={handleBreak}>
                    -
                </button>
                <span>{breakTimeFixed/60}</span>
                <button className="plus" onClick={handleBreak}>
                    +
                </button>
            </div>
        </div>
        <h1>
            {sessionTime >=0 ? (
                <span>
                    {`${Math.trunc(sessionTime /60)} : ${sessionTime % 60 < 10 ? `0${sessionTime % 60}` : `${sessionTime % 60}`}`}
                </span>
            ):(
                <span>
                    {`${Math.trunc(breakTime /60)} : ${breakTime % 60 < 10 ? `0${breakTime % 60}` : `${breakTime % 60}`}`}
                </span>
            )}
        </h1>
        <div className="container-controllers">
            <button
            onClick={playPause}
            >
                <img src= { workingChrono ? PauseImg : PlayImg } />
            </button>
            <button className=''
            onClick={resetfunc}>
                <img src={ResetImg}/>
            </button>
        </div>
    </div>
  )
}
