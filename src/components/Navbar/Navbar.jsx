import { Link, withRouter } from "react-router-dom"
import Input from "../Input/Input"
import "./navbar.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, Button, makeStyles, createStyles, FormControl, NativeSelect, withStyles, InputBase, Container, Grid, Paper, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, Typography, IconButton, useTheme } from "@material-ui/core";
import { useState } from "react";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { motion } from "framer-motion";
import CartDropDown from "../Cart/CartDropDown/CartDropDown";
import { connect } from "react-redux";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CartItem from "../Cart/CartItem/CartItem";
import { Close, Delete } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) =>
    createStyles({
        input: {
            margin: theme.spacing(1),
            height: 40
        },
        margin: {
            marginRight: theme.spacing(-1),
        },
        list: {
            width: 240,
        },
        fullList: {
            width: 'auto',
        },
        btn: {
            transition: ".5s",
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
                cursor: "pointer",
            }
        },
        root: {
            // padding: theme.spacing(1),
            [theme.breakpoints.down('xs')]: {
                width: "100vw",
            },
            [theme.breakpoints.up('sm')]: {
                width: "45vw",
            },
            [theme.breakpoints.up('md')]: {
                width: "35vw",
            },
            [theme.breakpoints.up('lg')]: {
                width: "25vw",
            },
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
const Navbar = ({ handleDarkMode, cartItems, history }) => {
    const classes = useStyles();

    const [age, setAge] = useState('');
    const [showCart, setShowCart] = useState(false)
    const theme = useTheme()

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

                                {/* <CartDropDown showCart={showCart} toggleShowCart={(value) => setShowCart(value)} /> */}
                            </div>


                            <div onClick={handleDarkMode}>
                                <Brightness4Icon className="cart-icon" />
                            </div>

                        </div>
                        <Drawer anchor="right" open={showCart} onClose={() => setShowCart(false)}>
                            <Paper elevation={0} square style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: ".5em 0 .5em .8em", position: 'sticky', top: 0, zIndex: 5 }}>
                                <Typography variant="h6" style={{ fontWeight: 300 }}>Your Cart</Typography>
                                <IconButton onClick={() => setShowCart(false)}>
                                    <Close />
                                </IconButton>
                            </Paper>
                            <Divider style={{ margin: '0 .9em', }} />
                            <div className={classes.root} style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, }}>
                                <div className="cart-dropdown">
                                    <div className="cart-items" style={{ justifyContent: cartItems.length ? "flex-start" : 'center' }}>
                                        {cartItems.length ? (cartItems.map(p => {
                                            const { id, } = p || {}
                                            return (
                                                <>

                                                    <CartItem key={id} item={p} />
                                                    <Divider />
                                                </>

                                            )
                                        })) :
                                            <span className='empty-message'>Your cart is currently empty</span>}
                                    </div>
                                </div>

                                <Paper square elevation={8} style={{ position: 'sticky', bottom: 0, right: 0, left: 0, padding: '2em .6em 1.5em' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: "0em 0" }}>
                                        <Typography variant="caption" >Subtotal</Typography>
                                        <Typography variant="caption" >Rs 12000</Typography>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: "0 0 3em 0 " }}>
                                        <Typography variant="caption" >Shipping</Typography>
                                        <Typography variant="caption" >FREE</Typography>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: "1em 0 1.5em" }}>
                                        <Typography variant="subtitle2">Total</Typography>
                                        <Typography variant="subtitle2">Rs 12000</Typography>
                                    </div>

                                    <Button fullWidth onClick={() => {
                                        history.push('/checkout');
                                        setShowCart(false);

                                    }} disabled={!cartItems.length ? true : false} style={{ padding: '.8em 0', borderRadius: 4, }} variant="contained" color="primary">CHECKOUT</Button>
                                </Paper>



                            </div>
                            {/* <div
                                className={classes.list}
                                role="presentation"
                                onClick={() => setShowCart(false)}
                            // onKeyDown={toggleDrawer(anchor, false)}
                            >
                                <List>
                                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider />
                                <List>
                                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </div> */}
                        </Drawer>

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
export default withRouter(connect(mapStateToProps,)(Navbar))

