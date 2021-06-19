import Header from "./component/header"
import React, {useState} from 'react';
import { TaskForm } from "./component/TaskForm/TaskForm";
import Task from "./component/Task/Task";

import './App.css';

function App() {
  // state of the tasks being displayed
  const [allTasks, setAllTasks] = useState([]);

  // adds new task objects and sets the state for allTasks obj
  const AddTask = text => {
    // instantiates a new date for each task added
    const date = new Date()

    // all vars to be implemented in dateTime property to get current time
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
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


  // toggles the isCompleted property between true and false onClick
  // will render a line through the desc to indicate complete task
  const CompleteTask = index => {
    const newTask = [...allTasks];
    newTask[index].isCompleted = !newTask[index].isCompleted;
    setAllTasks(newTask);
  };

  // removes curr task based on index and updates
  // state for allTasks obj
  const RemoveTask = index => {
    const newTasks = [...allTasks];
    newTasks.splice(index, 1);
    setAllTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <section className="todo-item-box">
        <TaskForm AddTask={AddTask}/>
      </section>
      <section className="todo-list">
        {
          allTasks.map((task, index) => (
            <Task key={index} index={index} {...task} RemoveTask={RemoveTask} CompleteTask={CompleteTask}/>
          ))
        }
      </section>
    </div>
  );
}



export default App;
