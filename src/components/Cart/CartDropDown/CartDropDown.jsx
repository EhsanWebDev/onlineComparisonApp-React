import { Button, makeStyles, Paper, createStyles } from '@material-ui/core'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { products_data } from '../../../data';
import CartItem from '../CartItem/CartItem';
import "./cart-drop-down.css"

const useStyles = makeStyles((theme) =>
    createStyles({
        btn: {
            transition: ".5s",
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
                cursor: "pointer",
            }
        }

    })
);


const CartDropDown = ({ showCart, cartItems, history, toggleShowCart }) => {
    const classes = useStyles();

    return (
        <Paper className="cart-dropdown" style={{ display: showCart ? "flex" : 'none' }}>
            <div className="cart-items">
                {cartItems.length ? (cartItems.map(p => {
                    const { id, } = p || {}
                    return (
                        <CartItem key={id} item={p} />
                    )
                })) :
                    <span className='empty-message'>Your cart is empty</span>}
            </div>
            <Button onClick={() => {
                history.push('/checkout');
                toggleShowCart(false);

            }} disabled={cartItems.length ? false : true} style={{ marginTop: "auto" }} className={classes.btn} variant="outlined" color="primary">GO TO CHECKOUT</Button>
        </Paper>
    )
}

const mapStateToProps = ({ cart }) => {
    const { cartItems } = cart || {}
    return {
        cartItems
    }
}
export default withRouter(connect(mapStateToProps)(CartDropDown))
