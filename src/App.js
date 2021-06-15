import Header from "./component/header"

import './App.css';

const allTasks = [
  {
      id: 0,
      description: "Gym",
      dateTime: "Created on {date} at {time}",
      isCompleted: false
  },
  {
      id: 1, 
      description: "Bathe Dog",
      dateTime: "Created on {June 2nd, 2021} at {10:52:21 a.m.}",
      isCompleted: false
  },
  {
    id: 2, 
    description: "Code",
    dateTime: "Created on {June 10th, 2021} at {12:03:57 a.m.}",
    isCompleted: false
}
]

function App() {
  return (
    <div className="App">
      <section className="tasklist">
        {allTasks.map(task => {
          return <Tasks key={task.id} {...task} />
        })}
      </section>
    </div>
  );
}

function Tasks({description, dateTime, isCompleted}) {
  
  return (
    <article className="tasks">
      <h1 className="desc">Task: {description}</h1>
      <h3 className="datetime">{dateTime}</h3>
      <h4>{isCompleted}</h4>
    </article>
  )
}

export default App;
