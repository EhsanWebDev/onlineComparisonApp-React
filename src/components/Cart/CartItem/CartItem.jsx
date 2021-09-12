import { IconButton, Typography } from "@material-ui/core"
import "./cart-item.css"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import { connect } from "react-redux";
import { addItem, clearItemFromCart, removeItem } from "../../../redux/cart/cart.actions";

const CartItem = ({ item, addItem, removeItem, clearItem }) => {
    const { name, image, price, quantity } = item || {}
    return (
        <div className="cart-item">
            <div className="cart-img-container">
                <img src={image} alt="img" />
                <div className='quantity'>
                    <IconButton size="small" className='arrow' onClick={() => removeItem(item)}>
                        {/* &#10094; */}
                        <RemoveCircleOutlineOutlinedIcon className="cart-action-icon" color="action" />
                    </IconButton>
                    <p className='cart-item-value'>{quantity}</p>
                    <IconButton size="small" className='arrow' onClick={() => addItem(item)}>
                        {/* &#10095; */}
                        <AddCircleOutlineOutlinedIcon className="cart-action-icon" color="action" />
                    </IconButton>
                </div>
            </div>

            <div className="item-details">
                <div className="cart-item-name-price">
                    <p className="cart-item-name">{name}</p>
                    <p className="cart-item-price">Rs {price}</p>
                </div>

                <p className="cart-item-by">By Gree</p>
                <div className="cart-item-delivery-container">
                    <p className="cart-item-delivery">Avg. delivery in 5–7 business days</p>
                    <p onClick={() => removeItem(item)} className="cart-item-remove">Remove</p>
                </div>

                {/* <span className="price">
                    {quantity} x 
                </span> */}
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CartItem);

