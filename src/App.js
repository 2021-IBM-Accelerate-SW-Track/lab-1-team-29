import Header from "./component/header"
import React, {useState} from 'react';
import { TaskForm } from "./component/TaskForm/TaskForm";
import Task from "./component/Task/Task";
import { Box, Container, Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import './App.css';

function App() {
  // logic for dark mode toggle
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });
  // function that changes the state of the theme onClick
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  
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
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header 
        darkState={darkState} 
        handleThemeChange={handleThemeChange}
        />
        <section className="todo-item-box">
          <TaskForm AddTask={AddTask} allTasks={allTasks}/>
        </section>
        <Container className="todo-list">
          <Grid container spacing={3}>
            {
              allTasks.map((task, index) => (
                <Grid item xs={12} md={6} lg={4}>
                  <Box>
                    <Task
                    key={index} 
                    index={index} 
                    {...task} 
                    RemoveTask={RemoveTask} 
                    CompleteTask={CompleteTask}
                    />
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
    </>
  );
}



export default App;
