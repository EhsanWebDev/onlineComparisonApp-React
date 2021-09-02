import { Link } from "react-router-dom"
import "./sidebar.css"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link>Price </Link>
                    <NavigateNextIcon className="sidebar-icon" />
                </li>
                <li>
                    <Link>Brand</Link>
                    <NavigateNextIcon className="sidebar-icon" />
                </li>
                <li>
                    <Link>WARRANTY</Link>
                    <NavigateNextIcon className="sidebar-icon" />
                </li>
                <li>
                    <Link>TON</Link>
                    <NavigateNextIcon className="sidebar-icon" />
                </li>
                <li>
                    <Link>heat & cool</Link>
                    <NavigateNextIcon className="sidebar-icon" />
                </li>
                <li>
                    <Link>inverter</Link>
                    <NavigateNextIcon className="sidebar-icon" />
                </li>
                <li>
                    <Link>self cleaning</Link>
                    <NavigateNextIcon className="sidebar-icon" />
                </li>
                <li>
                    <Link>shipping</Link>
                    <NavigateNextIcon className="sidebar-icon" />
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
