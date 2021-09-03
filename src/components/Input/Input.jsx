import "./input.css"
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, IconButton, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) =>
    createStyles({
        input: {
            margin: theme.spacing(1),
            height: 40
        }
    })
);
const Input = () => {
    const classes = useStyles();
    return (
        <form noValidate autoComplete="off" className="input-container">
            {/* <input type="text" placeholder="Type here..." /> */}

            <TextField InputProps={{
                className: classes.input,

            }} id="outlined-basic" label="Search Here..." variant="outlined" fullWidth />
        </form>
    )
}

export default Input
