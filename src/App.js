import React, { useState } from 'react';
import Form from './component/Form';
import List from './component/List';

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <h1> TO-DO LIST </h1>
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  ); 

}

export default App