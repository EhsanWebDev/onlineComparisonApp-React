
import "./home.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import { products_data } from "../../data"
import ProductsGrid from "../../components/Grid/ProductsGrid"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Home = () => {

    return (
        <div className="home">
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <div style={{ marginBottom: 30 }}>
                        <Carousel dynamicHeight transitionTime={900} showThumbs={false} interval={2500} infiniteLoop autoPlay style>
                            <div>
                                <img src="https://media.gettyimages.com/photos/turning-on-the-air-conditioner-picture-id1259269839" />
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1563623700465-1265fad258f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" />
                            </div>
                            <div>
                                <img src="https://media.gettyimages.com/photos/air-conditioner-picture-id157482774" />
                            </div>
                        </Carousel>
                    </div>

                    <ProductsGrid DATA={products_data} />
                </div>
            </div>
        </div>
    )
}

export default Home
