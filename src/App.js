import Header from "./component/header"
import React, {useState} from 'react';
import { TaskForm } from "./component/TaskForm/TaskForm";
import Task from "./component/Task/Task";

import './App.css';

function App() {
  // state of the tasks being displayed
  const [allTasks, setAllTasks] = useState([
    {
      id: 0,
      description: "gym",
      dateTime: {
        date: "June 12th, 2021",
        time: "12:42:20 a.m."
      },
      isCompleted: false
    },
    {
      id: 1,
      description: "coding",
      dateTime: {
        date: "June 21th, 2021",
        time: "10:10:10 a.m."
      },
      isCompleted: false
    }
  ])

  // adds new task objects and sets the state for allTasks obj
  const addTask = text => {
    // instantiates a new date for each task added
    const date = new Date()

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    // makes a new object arr with curr objects plus the added task
    const newTasks = [...allTasks, { 
      description: text,
      dateTime: `Created on ${month}/${day}/${year} at ${hour}:${minute < 10 ? "0" + minute: minute}`,
      isCompleted: false 
    }];
    setAllTasks(newTasks);
  }

  // removes curr task based on index and updates
  // state for allTasks obj
  const removeTask = index => {
    const newTasks = [...allTasks];
    newTasks.splice(index, 1);
    setAllTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <section className="todo-item-box">
        <TaskForm addTask={addTask} {...allTasks}/>
      </section>
      <section className="todo-list">
        {allTasks.map((task, index) => {            
          return (
          <Task key={index} {...task} />
          )
        })}
      </section>
    </div>
  );
}



export default App;
