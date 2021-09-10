import { Typography } from "@material-ui/core"
import "./cart-item.css"


const CartItem = ({ item }) => {
    const { name, image, price, quantity } = item || {}
    return (
        <div className="cart-item">
            <img src={image} alt="img" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x Rs {price}
                </span>
            </div>
        </div>
    )
}

export default CartItem
