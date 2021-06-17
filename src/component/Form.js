import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function Form({ tasks, setTasks }) {
    const [inputText, setInputText] = useState("");
    return(
        <form>
            <input 
                type="text" 
                placeholder = "Enter Task" 
                onChange = {handleInput} 
                onKeyDown = {enterSubmission}
                value = {inputText}/>

            <Button variant="outlined" 
                onClick = {handleSubmission}> add </Button>
        </form>
    );

    function handleInput(event){
        setInputText(event.target.value)
    }

    // Submits when user presses 'Enter' instead of 'Add'
    function enterSubmission(event){
        if(event.key === 'Enter'){
            handleSubmission(event);
        }
    }

    function handleSubmission(event){
        event.preventDefault();
        setTasks([...tasks, 
            {id: Math.random(100), 
             text: inputText, 
             timestamp: Date.now()}]);
        setInputText("");
    }
}

export default Form