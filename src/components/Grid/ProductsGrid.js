import React from 'react'
import { Card, Grid, makeStyles, Button } from "@material-ui/core"
import Image from 'material-ui-image'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 320,
        textAlign: 'center',
        transition: "0.2s",
        boxShadow: "0 0 4px  rgba(0,0,0,0.3)",
        padding: "0 1px 1em",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: "100%",
        cursor: "pointer",

        "&:hover": {
            boxShadow: "0 2px 15px  rgba(0,0,0,0.3)"
        },
    },
    media: {
        width: '100%',
        height: "auto",
    },
    btn: {
        transition: ".5s",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
            cursor: "pointer",
        }
    }

}));
const ProductsGrid = ({ DATA = [] }) => {
    const classes = useStyles();
    return (
        <Grid
            container className={classes.root} spacing={2} >
            {DATA.map((product, index) => {
                const { id, name, image, price, brand } = product || {}
                return (
                    <Grid key={id} item xs={12} sm={6} md={4} xl={3}>
                        <Card className={classes.card}>
                            <Image
                                src={image}
                                imageStyle={{
                                    width: '100%',
                                    height: "auto",
                                }}
                            />
                            {/* <img src={image} alt="" className={classes.media} /> */}
                            <div className="product-info">

                                <p className="product-name">{name}</p>
                                <p className="product-price">{price}</p>

                                <p className="product-brand">
                                    {brand}
                                </p>
                                <br />
                                <Button variant="outlined" className={classes.btn} >
                                    add to cart
                                </Button>

                            </div>
                        </Card>
                    </Grid>

                )
            })}
        </Grid>
    )
}

export default ProductsGrid
