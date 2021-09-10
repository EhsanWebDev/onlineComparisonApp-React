import { Link } from "react-router-dom"
import Input from "../Input/Input"
import "./navbar.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, Button, makeStyles, createStyles, FormControl, NativeSelect, withStyles, InputBase, Container, Grid, Paper } from "@material-ui/core";
import { useState } from "react";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { motion } from "framer-motion";
import CartDropDown from "../Cart/CartDropDown/CartDropDown";
import { connect } from "react-redux";

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
        },
    },
}))(InputBase);
const Navbar = ({ handleDarkMode, cartItems }) => {
    const classes = useStyles();

    const [age, setAge] = useState('');
    const [showCart, setShowCart] = useState(false)

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container fixed>
            <div className="navbar">
                <Grid container spacing={1} alignItems="center" >
                    <Grid item xs={12} sm={12} md={2} lg={2} >
                        <Link to="/" >Logo</Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={9} >
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
                            <div>
                                <Input />
                                <Button variant="contained" color="primary" className={classes.input} >
                                    Search
                                </Button>
                            </div>


                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={1}>

                        <div className="input-container">
                            <div className="cart-container">
                                <span onClick={() => setShowCart(!showCart)}>
                                    <Badge badgeContent={(cartItems || []).length} color="primary" >
                                        <ShoppingCartIcon className="cart-icon" />
                                    </Badge>
                                </span>

                                <CartDropDown showCart={showCart} toggleShowCart={(value) => setShowCart(value)} />
                            </div>


                            <div onClick={handleDarkMode}>
                                <Brightness4Icon className="cart-icon" />
                            </div>

                        </div>

                    </Grid>
                </Grid>
            </div>
        </Container>

    )
}
const mapStateToProps = ({ cart }) => {
    const { cartItems } = cart || {}
    return {
        cartItems
    }
}
export default connect(mapStateToProps,)(Navbar)

