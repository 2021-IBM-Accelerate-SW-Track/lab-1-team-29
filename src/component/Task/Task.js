import Card from '@material-ui/core/Card';
import React, { useState } from 'react'; 
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import { Button, Typography, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: 20,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    },
    updateBtn: {
        position: 'relative',
        marginTop: 15,
        marginRight: 50
    },
    input: {
        position: 'relative',
        marginLeft: 30
    }
  }));

// each Task will render a view or edit template depending on the action invoked
export default function Task({index, description, dateTime, isCompleted, CompleteTask, RemoveTask, UpdateTask}) {
    // useState that will help program check whether
    // user is just viewing task or updating it
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const classes = useStyles();

    const handleChange = e => {
        setNewName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        UpdateTask(index, newName);
        setNewName("");
        setEditing(!isEditing);
    }

    // EDIT TEMPLATE *************
    const editTemplate = (
        <Zoom in={true}> 
            <form onSubmit={handleSubmit}>
            <Card classes={{ root: classes.card }}>
                    <CardHeader
                        action = {
                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.updateBtn}
                            >
                                Update
                            </Button> 
                        }
                        title={
                            <TextField 
                            id="outlined-basic" 
                            label="New Task" 
                            variant="outlined"
                            size="small"
                            className={classes.input}
                            required={true}
                            value={newName}
                            onChange={handleChange}
                            />
                        }
                    />
                    <CardActions>
                        <Button 
                        size="small" 
                        onClick={() => CompleteTask(index)}>
                            {isCompleted ? 'Undo' : 'Done'}
                        </Button>
                        <Button 
                        size="small"
                        onClick={() => {setEditing(!isEditing);setNewName("")}} 
                        >
                            Cancel
                        </Button>
                    </CardActions>

                </Card>
            </form>
        </Zoom>
    )
    // END OF EDIT TEMPLATE *************


    // VIEW TEMPLATE *************
    const viewTemplate = (
        <Zoom in={true}>
            <Card classes={{ root: classes.card }}>
                <CardHeader
                    action = {
                        <IconButton 
                        onClick={() => RemoveTask(index)} >
                            <DeleteIcon />
                        </IconButton> 
                    }
                    title={
                        <Typography 
                        style={{textDecoration: isCompleted ? 'line-through' : ''}}
                        variant={"h5"}>
                            {description}
                        </Typography>
                    }
                    subheader={
                        <Typography variant={"h10"} color="textSecondary">
                            {dateTime}
                        </Typography>
                    }
                />
                <CardActions>
                    <Button 
                    size="small" 
                    onClick={() => CompleteTask(index)}>
                        {isCompleted ? 'Undo' : 'Done'}
                    </Button>
                    <Button 
                    size="small"
                    onClick={() => setEditing(!isEditing)} 
                    >
                        Edit
                    </Button>
                </CardActions>
            </Card>
        </Zoom>
    )
    // END OF VIEW TEMPLATE *************

    return isEditing ? editTemplate : viewTemplate;
}