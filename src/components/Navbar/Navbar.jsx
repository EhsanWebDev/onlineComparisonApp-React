import { Link } from "react-router-dom"
// import Button from "../Button/Button"
import Input from "../Input/Input"
import "./navbar.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, Button, makeStyles, createStyles, FormControl, InputLabel, NativeSelect, withStyles, InputBase, Select } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) =>
    createStyles({
        input: {
            margin: theme.spacing(1),
            height: 40
        },
        margin: {
            marginRight: theme.spacing(-1),
        },

    })
);
const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);
const Navbar = () => {
    const classes = useStyles();

    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="navbar">
            <Link to="/" >Logo</Link>
            <div className="search-container">
                <FormControl className={classes.margin} >
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <option value="">All Categories</option>
                        <option value={10}>A.C</option>
                        <option value={20}>Heaters</option>
                    </NativeSelect>
                </FormControl>
                <Input />
                <Button variant="contained" color="primary" className={classes.input} >
                    Search
                </Button>

                <Badge badgeContent={4} color="primary" >
                    <ShoppingCartIcon className="cart-icon" />
                </Badge>

            </div>

        </div>
    )
}

export default Navbar
