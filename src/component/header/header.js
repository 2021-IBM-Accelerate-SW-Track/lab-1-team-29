import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Switch: {
        position: 'relative',
        left: 160,
        bottom: 55
    },
  });

export default function Header({ darkState, handleThemeChange}){
    const classes = useStyles();
    return (
        <>
            <div>
                <h1>TODO APP</h1>
                <Switch
                className={classes.Switch}
                color="primary"
                checked={darkState} 
                onChange={handleThemeChange}
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
        </>

    )
}