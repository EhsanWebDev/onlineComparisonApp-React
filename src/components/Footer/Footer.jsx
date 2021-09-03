import { Link } from "react-router-dom"
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-company">
                <p className="company-details"><span>Company </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam similique iadipisicing elit.</p>
                <p className="company-address"><span>Address: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="company-email"><span>Email: </span>company@hotmail.com</p>
                <p className="company-phone"><span>Phone Number: </span>0300 - 1234567</p>
            </div>

            <div className="footer-info">
                <h6>Information</h6>
                <ul>
                    <li>
                        <Link>Payment Method</Link>
                    </li>
                    <li>
                        <Link>Shipping Information</Link>
                    </li>
                    <li>
                        <Link>Price Policy</Link>
                    </li>
                    <li>
                        <Link>Return Policy</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-get-to-know">
                <h6>Get to know us</h6>
                <ul>
                    <li>
                        <Link>Help</Link>
                    </li>
                    <li>
                        <Link>My Account</Link>
                    </li>
                    <li>
                        <Link>Contact Us</Link>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Footer
