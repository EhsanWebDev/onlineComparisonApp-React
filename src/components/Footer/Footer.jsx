import { Container, Grid } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./footer.css"
const Footer = () => {
    return (
        <Container fixed>
            <div className="footer">
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item xs={12} md={7} lg={5}>
                        <div className="footer-company">
                            <p className="company-details"><span>Company </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam similique iadipisicing elit.</p>
                            <p className="company-address"><span>Address: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="company-email"><span>Email: </span>company@hotmail.com</p>
                            <p className="company-phone"><span>Phone Number: </span>0300 - 1234567</p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={2} lg={3}>
                        <div className="footer-info">
                            <h6>Information</h6>
                            <ul>
                                <li>
                                    <Link to="/">Payment Method</Link>
                                </li>
                                <li>
                                    <Link to="/">Shipping Information</Link>
                                </li>
                                <li>
                                    <Link to="/">Price Policy</Link>
                                </li>
                                <li>
                                    <Link to="/">Return Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={2} lg={3}>
                        <div className="footer-get-to-know">
                            <h6>Get to know us</h6>
                            <ul>
                                <li>
                                    <Link to="/">Help</Link>
                                </li>
                                <li>
                                    <Link to="/">My Account</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact Us</Link>
                                </li>

                            </ul>
                        </div>
                    </Grid>
                </Grid>


            </div>


        </Container>

    )
}

export default Footer
