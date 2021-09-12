import { Link } from "react-router-dom"
import "./topbar.css"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from "react";
import { withRouter, matchPath } from 'react-router-dom'

const TopBar = ({ location }) => {
    const [expanded, setExpanded] = useState(false)
    const handleToggle = () => {
        setExpanded(!expanded)
    }

    // console.log({ isMovieWatchPathActive })
    return (
        <div className={`topbar-container`}>
            <div className="menu">
                <p>Menu</p>
                {expanded ? <span onClick={handleToggle}> <ExpandLessIcon className="sidebar-icon" /></span>
                    : <span onClick={handleToggle}><ExpandMoreIcon className="sidebar-icon" /></span>
                }
            </div>

            <ul className={expanded ? "show-list" : "hide-list"}>
                <li>
                    <Link to="/">Air Conditioner</Link>
                </li>
                <li>
                    <Link to="/">Reviews</Link>
                </li>
                <li>
                    <Link className={!!matchPath(
                        location.pathname,
                        '/compare'
                    ) && "active"} to="/compare">Compare</Link>
                </li>
                <li>
                    <Link to="/">News</Link>
                </li>
                <li>
                    <Link className={!!matchPath(
                        location.pathname,
                        '/contact-us'
                    ) && "active"} to="/contact-us">Contact Us</Link>
                </li>
                <li>
                    <Link to="/">Outlets</Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(TopBar)
