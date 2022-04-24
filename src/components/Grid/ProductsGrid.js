import React, { useState } from 'react'
import { Card, Grid, makeStyles, Button } from "@material-ui/core"
import Image from 'material-ui-image'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router';

const useStyles = props => makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
        },
        card: {
            // maxWidth: 320,
            textAlign: 'center',
            transition: "0.2s",
            boxShadow: "0 0 4px  rgba(0,0,0,0.3)",
            padding: props ? ".2em .2em .8em" : ".5em .5em",
            display: "flex",
            flexDirection: props ? "column" : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: "100%",
            cursor: "pointer",
            "&:hover": {
                boxShadow: "0 2px 15px  rgba(0,0,0,0.3)"
            },
        },
        btn: {
            transition: ".5s",
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
                cursor: "pointer",
            }
        }
    }
});
const ProductsGrid = ({ DATA = [], gridView = true, addItem, history }) => {

    const { card, btn, root } = useStyles(gridView)() || {};

    console.log({ DATA })

    return (
        <Grid
            container className={root} spacing={2} >
            {DATA.map((product, index) => {
                const { id, name, productImageUrl, priceFrom, brand } = product || {}
                return (
                    <Grid key={id} item xs={12} sm={gridView ? 6 : 12} md={gridView ? 4 : 12} lg={gridView ? 3 : 6}>
                        <Card className={card}>
                            <div onClick={() => history.push(`/product-details/${id}`)} style={{ flexBasis: gridView ? '100%' : '50%', }}>
                                <LazyLoadImage delayMethod="debounce"
                                    alt={"alt"}
                                    effect="blur"
                                    src={productImageUrl || "./noImg.png"}
                                    className="rounded-sm max-h-40 max-w-xs md:max-h-64 lg:max-h-90 lg:w-full"
                                    style={{
                                        borderRadius: 4,
                                    }} />
                            </div>

                            <div className="product-info">

                                <p onClick={() => history.push(`/product-details/${id}`)} className="product-name">{name}</p>
                                <p className="product-price">Rs {priceFrom}</p>

                                <p className="product-brand">
                                    {brand}
                                </p>
                                <br />
                                <Button onClick={() => history.push("/compare")} variant="outlined" className={btn} >
                                    Compare
                                </Button>
                                {/* <Button onClick={() => addItem(product)} variant="outlined" className={btn} >
                                    add to cart
                                </Button> */}

                            </div>
                        </Card>
                    </Grid>

                )
            })}
        </Grid>
    )
}

const mapStateToProps = ({ cart }) => {
    const { cartItems } = cart || {}
    return {
        cartItems
    }
}
const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsGrid))

