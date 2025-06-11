import React, { useEffect } from "react";
import { useState } from "react";
import './index.css';

const App = () => {

  const [time,setTime] = useState(0);
  const [running , setRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval=setInterval(()=>{
        setTime((prev)=>prev+10)
      },10)
    }
    else if(!running){
      clearInterval(interval)
    }
    return ()=> clearInterval(interval);

  },[running])

  return (
    <>
    <div className="flex flex-col items-center justify-center py-20 border-[5px] w-[500px] mx-auto my-[20px]">
          <h1 className="text-[40px] font-semibold pb-2 text-green-500">Stopwatch</h1>
      <div>
        <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time/10)%100)).slice(-2)}</span>
      </div>
        <div className="py-5"></div>
      <div>
        {running ? (<button className="border rounded-lg py-1 px-2 " onClick={()=>{setRunning(false)}}>Stop</button>):(<button className="border rounded-lg py-1 px-2 " onClick={()=>{setRunning(true)}}>Start</button>)}
        <span className="px-3"></span>
        <button className="border rounded-lg py-1 px-2 " onClick={()=>setTime(0)}>Reset</button>
      </div>
    </div>
      
    </>
  );
};

export default App;
