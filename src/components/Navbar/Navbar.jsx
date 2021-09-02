import { Link } from "react-router-dom"
import Button from "../Button/Button"
import Input from "../Input/Input"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" >Logo</Link>

            <div className="search-container">
                <Input />
                <Button primary extraStyles={styles.btnStyles} />
            </div>
        </div>
    )
}
const styles = {
    btnStyles: { borderTopRightRadius: 4, borderBottomRightRadius: 4 }
}
export default Navbar
