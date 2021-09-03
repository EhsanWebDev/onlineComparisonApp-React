
import "./home.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Button from "../../components/Button/Button"
import { products_data } from "../../data"

const Home = () => {

    return (
        <div className="home">

            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <div className="hero-img-container">
                        <img src="https://thumbs.dreamstime.com/b/powerful-air-conditioner-frozen-girl-under-57577896.jpg" alt="hero-img" />
                    </div>

                    <div className="content-grid">
                        {products_data.map((product, index) => {
                            const { id, name, image, price, brand } = product || {}
                            return (
                                <div className="content-product" key={id}>
                                    <img src={image} alt="" />
                                    <div className="product-info">
                                        <p className="product-name">{name}</p>
                                        <p className="product-price">{price}</p>
                                        <p className="product-brand">
                                            {brand}
                                        </p>
                                        <br />
                                        <Button outline title="add to cart" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
