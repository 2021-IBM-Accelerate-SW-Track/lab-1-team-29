import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './../App.css';

function Form({ tasks, setTasks }) {
    const [inputText, setInputText] = useState("");
    return(
        <form>
            <input data-testid = "new-item-input" className = "input"
                type = "text" 
                placeholder = "Enter Task" 
                onChange = {handleInput} 
                onKeyDown = {enterSubmission}
                value = {inputText}/>

            <Button data-testid = "new-item-button" variant="outlined" 
                onClick = {handleSubmission}> Add </Button>
        </form>
    );

    function handleInput(event){
        setInputText(event.target.value);
    }

    // Submits when user presses 'Enter' instead of 'Add'
    function enterSubmission(event){
        if(event.key === 'Enter'){
            handleSubmission(event);
        }
    }

    function handleSubmission(event){
        event.preventDefault();
        if(!inputText || /^\s*$/.test(inputText)){
            return; 
        }

        // Checking for duplicates 
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].text === inputText){
                setInputText("");
                return;
            }
         }

        setTasks([...tasks, 
            {id: Math.random(10000), 
             text: inputText, 
             timestamp: Date.now()}]);
        setInputText("");
    }
}

export default Form;