import React, { useEffect, useState } from 'react';
import {AddTask} from './components/AddTask.jsx';
import {Header} from './components/Header.jsx';
import {ShowTask} from './components/ShowTask.jsx';
import './App.css';

export const App = () => {
  const [taskList, setTaskList]= useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className='App'>
      <Header />
      <AddTask 
        taskList = {taskList} 
        setTaskList = {setTaskList} 
        task = {task}
        setTask = {setTask}
      />
      <ShowTask 
        taskList = {taskList} 
        setTaskList = {setTaskList} 
        task = {task}
        setTask = {setTask}
      />
    </div>
  )
}
