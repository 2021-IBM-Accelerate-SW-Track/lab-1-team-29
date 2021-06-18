import React, {useState} from 'react'


export function TaskForm({ addTask }) {
    // states for all of the task data to be changed
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
  
  
    const clickChanger = e => {
      e.preventDefault();
    }
  
  
    return (
      <form onSubmit={clickChanger} className="todo-input-form">
        <input 
        type="text" 
        placeholder="Add a task..." 
        className="input"
        required={true}
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    )
  }