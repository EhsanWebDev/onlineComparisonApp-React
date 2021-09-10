import { Grid, IconButton, makeStyles, createStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ClearIcon from '@material-ui/icons/Clear';
import {
    clearItemFromCart,
    addItem,
    removeItem
} from '../../redux/cart/cart.actions';

import './checkout-item.css';
const useStyles = makeStyles((theme) =>
    createStyles({

        root2: {
            display: 'flex',
            border: "1px solid #ddddddb5",
            padding: "0 .4em 0 .4em",
            margin: "0"

        },
        details: {
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        content: {
            flex: '1 0.75 auto',
            marginLeft: theme.spacing(1)
        },
        cover: {
            width: '24%',
            backgroundSize: 'contain',
        },
        products: {
            maxHeight: 260,
            overflowY: 'scroll'
        }

    })
);
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { root2, details, content, cover, } = useStyles() || {}
    const { name, image, price, quantity } = cartItem;
    return (
        <Grid item xs={12} md={12}>
            <Card elevation={0} className={root2}>
                <CardMedia
                    className={cover}
                    image={image}
                />
                <div className={details}>
                    <CardContent className={content}>
                        <Typography variant="body2" style={{ fontWeight: 500 }} >
                            {name}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            Rs {price}
                        </Typography>
                        <span className='quantity'>
                            <div className='arrow' onClick={() => removeItem(cartItem)}>
                                &#10094;
                            </div>
                            <span className='value'>{quantity}</span>
                            <div className='arrow' onClick={() => addItem(cartItem)}>
                                &#10095;
                            </div>
                        </span>
                    </CardContent>
                    <IconButton onClick={() => clearItem(cartItem)}>
                        <ClearIcon color="primary" />
                    </IconButton>

                </div>
            </Card>

        </Grid>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);