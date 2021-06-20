import Card from '@material-ui/core/Card';
import { useState } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import { Button, Typography, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: 20,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    }
  }));

export default function Task({index, description, dateTime, isCompleted, CompleteTask, RemoveTask}) {
    const classes = useStyles();

    return (
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
                </CardActions>
            </Card>
        </Zoom>
    )
}