import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

function Task({ task, tasks, setTasks }){
    const [checked, setChecked] = useState(false);
    const dateTime = new Intl.DateTimeFormat('en-US', 
        {year: 'numeric', 
         month: '2-digit',
         day: '2-digit', 
         hour: '2-digit', 
         minute: '2-digit', 
         second: '2-digit'}).format(task.timestamp);

    return (
        <div className = "taskDesign">
            <FormControlLabel
                control = {<Checkbox 
                    checked = {checked} 
                    onChange = {handleChange}/>}
                label = {task.text}/>
            <span> { dateTime} </span>
            <Button onClick = {deleteTask}> Delete </Button>
            <Button onClick = {editTask}> Edit </Button>
        </div>
    );

    function handleChange(event){
        setChecked(event.target.checked);
    }

    function deleteTask(){
        setTasks(tasks.filter((element) => 
            element.id !== task.id));
    }

    function editTask(){
        
    }
}

export default Task;