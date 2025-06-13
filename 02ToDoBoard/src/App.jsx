import React, { useState } from "react";
import "./index.css";
import Input from "./components/Input";

const App = () => {

  const [taskList,setTaskList]= useState([])

  return (
    <div>
      <h1>02 - To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div>
        {taskList.map((task,index)=>
          <li key={index}>{task}</li>
        )}

      </div>
    </div>
  );
};

export default App;
