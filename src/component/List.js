import React from 'react';
import Task from './Task';

function List({ tasks, setTasks }){
    return(
        <div>
            {tasks.map((task) => (
                <Task 
                    key = {task.id}
                    task = {task}
                    tasks = {tasks}
                    setTasks = {setTasks} />
            ))}
        </div>
    );

}

export default List 