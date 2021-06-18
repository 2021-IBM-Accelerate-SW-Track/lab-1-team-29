import React, {useState} from 'react'


export function TaskForm({ addTask }) {
    // states for all of the task data to be changed
    const [text, setText] = useState("");
  
    // once user clicks add button, it will invoke the addTask func
    // which sets up a new object array with the new task desc and time
    const clickChanger = e => {
      e.preventDefault();
      if (!text) return;
      addTask(text);
      setText(""); // resets text
    }
  
  
    return (
      <form onSubmit={clickChanger} className="todo-input-form">
        <input 
        type="text" 
        placeholder="Add a task..." 
        className="input"
        required={true}
        value={text}
        // grabs input value and changes state of text value
        onChange={(e) => setText(e.target.value)} 
        ></input>
        <button>Add</button>
      </form>
    )
  }