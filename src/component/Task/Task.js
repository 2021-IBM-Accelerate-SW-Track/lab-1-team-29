import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { IconButton} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export default function Task({index, description, dateTime, isCompleted, CompleteTask, RemoveTask}) {
    return (
        // TO ADD
        // style={{textDecoration: isCompleted ? 'line-through' : ''}}>{description}
        <Card>
            <CardHeader
                action = {
                    <IconButton onClick={() => RemoveTask(index)}>
                        <DeleteOutlined />
                    </IconButton> 
                }
                title={description}
                subheader={dateTime}
            />
            <CardActions>
                <Button 
                size="small" 
                onClick={() => CompleteTask(index)}>
                    {isCompleted ? 'Not done' : 'Done'}
                </Button>
            </CardActions>
        </Card>
    )
}