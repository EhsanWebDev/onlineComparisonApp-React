
import "./home.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import { products_data } from "../../data"
import ProductsGrid from "../../components/Grid/ProductsGrid"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@material-ui/core";
import ViewListIcon from '@material-ui/icons/ViewList';
import GridOnIcon from '@material-ui/icons/GridOn';
import { useState } from "react";
const Home = () => {
    const [gridView, setGridView] = useState(true)
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} lg={2} >
                    <Sidebar />
                </Grid>
                <Grid item xs={12} md={9} lg={10} >
                    <div className="content">
                        <div style={{ marginBottom: 30 }}>
                            <Carousel dynamicHeight transitionTime={900} showThumbs={false} interval={2500} infiniteLoop autoPlay style>
                                <div>
                                    <img src="https://media.gettyimages.com/photos/turning-on-the-air-conditioner-picture-id1259269839" alt="carosel" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1563623700465-1265fad258f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="carosel" />
                                </div>
                                <div>
                                    <img src="https://media.gettyimages.com/photos/air-conditioner-picture-id157482774" alt="carosel" />
                                </div>
                            </Carousel>
                        </div>
                        <div className="controls-container">
                            <div>
                                <span onClick={() => setGridView(true)}>
                                    <GridOnIcon className={`controls-icon ${gridView && "active"}`} />
                                </span>
                                <span onClick={() => setGridView(false)}>
                                    <ViewListIcon className={`controls-icon ${!gridView && "active"}`} />
                                </span>


                            </div>
                        </div>
                        <ProductsGrid DATA={products_data} gridView={gridView} />
                    </div>
                </Grid>

            </Grid>


        </>

    )
}

export default Home
