import React, {useState} from 'react'
import TextField from "@material-ui/core/TextField"
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  addBtn: {
    marginLeft: 20,
    marginTop: 12,
    borderRadius: 30,
  },

  inputStyle: {
    borderRadius: 10,
  }
})

export function TaskForm({ AddTask, allTasks}) {
    const classes = useStyles();

    // states for all of the task data to be changed
    const [text, setText] = useState("");
  
    // once user clicks add button, it will invoke the addTask func
    // which sets up a new object array with the new task desc and time
    const clickChanger = e => {
      e.preventDefault();
      if (!text) return;
      if (duplicate(text)) {alert(`This task already exists.`); return;}
      AddTask(text);
      setText(""); // resets text
    }

    // function that iterates through allTasks and checks if input value equals
    // any of the tasks' description
    const duplicate = value => {
      // if there are no tasks, do not compare
      if (allTasks.length > 0) {
        for (const task of allTasks) {
          if (task.description.toLowerCase() === value.toLowerCase()) return true;
        }
        return false;
      }
      return false;
    }
  
    return (
      <form onSubmit={clickChanger} className="todo-input-form">
        <TextField
          data-testid="new-item-input"
          id="outlined-dense"
          label="Task"
          className={classes.inputStyle}
          margin="dense"
          variant="outlined"
          required={true}
          value={text}
          // grabs input value and changes state of text value
          onChange={(e) => setText(e.target.value)}
        />
        <Button
        data-testid="new-item-button"
        onClick={clickChanger} 
        size="small"
        variant="contained"
        color="secondary" 
        aria-label="add"
        className={classes.addBtn}
        >
          <AddIcon />
        </Button>
      </form>
    )
  }