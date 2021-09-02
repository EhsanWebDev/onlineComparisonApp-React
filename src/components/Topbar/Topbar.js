import { Link } from "react-router-dom"
import "./topbar.css"
const TopBar = () => {
    return (
        <div className="topbar-container">
            <ul>
                <li>
                    <Link>Air Conditioner</Link>
                </li>
                <li>
                    <Link>Reviews</Link>
                </li>
                <li>
                    <Link>Compare</Link>
                </li>
                <li>
                    <Link>News</Link>
                </li>
                <li>
                    <Link>Contact Us</Link>
                </li>
                <li>
                    <Link>Outlets</Link>
                </li>
            </ul>
        </div>
    )
}

export default TopBar
