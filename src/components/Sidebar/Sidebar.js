import "./sidebar.css"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { sidebar_data } from "../../data";
import { Fragment, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import SimilarProduct from "../SimilerProduct/SimilerProduct";
const Sidebar = () => {
    const [sidebarData, setSidebarData] = useState(sidebar_data)
    const handleClick = (id) => {
        const updatedData = sidebarData.map(item => {
            const { id: itemId, expanded } = item || {}
            if (itemId === id) {
                return {
                    ...item,
                    expanded: !expanded
                }
            }
            return {
                ...item,
                expanded: false
            }
        })

        setSidebarData(updatedData)
    }
    return (
        <div className="sidebar" style={{
            margin: '3em 0 0', backgroundColor: '#eeeeee', height: '100vh', padding: '1em .5em', borderRadius: 6
        }}>
            <Typography variant="h6">
                Similar Products
            </Typography>
            <div style={{ margin: '1em 0 0', }}>
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
            </div>

            {/* <ul className="sidebar-container">

                {sidebarData.map((item) => {
                    const { id, name, expanded, expandedData } = item || {}
                    return (
                        <Fragment key={id}>
                            <li onClick={() => handleClick(id)} className="sidebar-item">
                                <div className="sidebar-flex">
                                    <p>{name}</p>
                                    {expanded ? <ExpandMoreIcon className="sidebar-icon" /> : <NavigateNextIcon className="sidebar-icon" />}
                                </div>

                                <progress max="100" value="20" className="Progress-main" aria-labelledby="Progress-id">
                                    <div className="Progress-bar" role="presentation">
                                        <span className="Progress-value" style={{ width: '80%' }}>&nbsp;</span>
                                    </div>
                                </progress>
                            </li>


                            {expanded &&
                                <div className="expended-items-container">
                                    <ul className="expended-list">
                                        {(expandedData || []).map((item) => {
                                            const { id, name } = item || {}
                                            return (
                                                <li key={id} className="expended-list-item">
                                                    <p>{name} (0)</p>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>}

                        </Fragment>

                    )
                })}

            </ul> */}
            {/* <img src="https://images.samsung.com/is/image/samsung/assets/in/720x800-AC-PF-Page-Mobile-copy-100.jpg?imwidth=720" alt="side-banner" /> */}
        </div>
    )
}

export default Sidebar
