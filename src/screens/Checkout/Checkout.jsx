
import { Grid, makeStyles, Paper, Typography, createStyles, TextField, FormControlLabel, Checkbox, Radio, Button, IconButton, Divider, } from '@material-ui/core';
import { useState } from 'react';
import { connect } from 'react-redux';


import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';


import './checkout.css';
import { useTheme } from '@material-ui/styles';


const useStyles = makeStyles((theme) =>
    createStyles({
        information: {
            padding: theme.spacing(2),
            marginBottom: theme.spacing(2)
        },
        marginTop: {
            marginTop: theme.spacing(2),
        },
        input: {
            fontSize: ".85rem"
        },
        root: {
            paddingLeft: theme.spacing(1),
        },
        root2: {
            display: 'flex',
            border: "1px solid #ddddddb5",
            padding: "0 .1em 0 .4em",
            margin: "0 0 0em"


        },
        details: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        content: {
            flex: '1 0 auto',
            marginLeft: theme.spacing(1)
        },
        cover: {
            width: '25%',
            backgroundSize: 'contain',
        },
        products: {
            maxHeight: 260,
            overflowY: 'scroll'
        }

    })
);

const CheckoutPage = ({ cartItems, total }) => {
    const { information, root, marginTop, input, root2, details, content, cover, products } = useStyles() || {}

    const [alternativeDelivery, setAlternativeDelivery] = useState(false)
    const [haveVoucher, setHaveVoucher] = useState(false)
    const theme = useTheme();
    return (

        <Grid container spacing={2} className={marginTop}>
            <Grid item xs={12} md={6}>
                <Paper elevation={4} className={information} >
                    <Typography variant="h6" component="h6">
                        Information
                    </Typography>
                    <form noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    InputLabelProps={{
                                        classes: {
                                            root: input,
                                        }
                                    }} className={input} id="name" label="Full Name" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    InputLabelProps={{
                                        classes: {
                                            root: input,
                                        }
                                    }} id="company" label="Company (Optional)" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField fullWidth InputLabelProps={{
                                    classes: {
                                        root: input,
                                    }
                                }} id="address" label="Full address" />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField fullWidth InputLabelProps={{
                                    classes: {
                                        root: input,
                                    }
                                }} className={input} id="email" label="Email" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth InputLabelProps={{
                                    classes: {
                                        root: input,
                                    }
                                }} id="phone" label="Phone" />
                            </Grid>

                            <FormControlLabel style={{ marginLeft: -8 }}
                                control={
                                    <Checkbox
                                        checked={alternativeDelivery}
                                        onChange={() => setAlternativeDelivery(!alternativeDelivery)}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }

                                label={<Typography variant="body2" color="textSecondary">Choose alternative delivery</Typography>}
                            />

                            {alternativeDelivery && (
                                <>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            InputLabelProps={{
                                                classes: {
                                                    root: input,
                                                }
                                            }} className={input} id="name" label="Full Name" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            InputLabelProps={{
                                                classes: {
                                                    root: input,
                                                }
                                            }} id="company" label="Company (Optional)" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField fullWidth InputLabelProps={{
                                            classes: {
                                                root: input,
                                            }
                                        }} id="address" label="Full address" />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </form>
                </Paper>
                <Paper elevation={4} className={information} >
                    <Typography variant="h6" component="h6">
                        Shipping
                    </Typography>
                    <form className={root} noValidate autoComplete="off">
                        <Grid container spacing={2} className={marginTop}>
                            <Typography variant="caption"  >Please choose your desired shipping provider.</Typography>
                            <FormControlLabel value="GLS" control={<Radio size="small" />}
                                label={<Typography variant="body2" color="textSecondary">GLS - Package delivered directly to the door - Free</Typography>}
                            />
                            <FormControlLabel value="GLS" control={<Radio size="small" />}
                                label={<Typography variant="body2" color="textSecondary">FedEx - Package delivered directly to the door - Rs 200</Typography>}
                            />
                            <FormControlLabel value="GLS" control={<Radio size="small" />}
                                label={<Typography variant="body2" color="textSecondary">Leopard - Package delivered directly to the door - Rs 150</Typography>}
                            />

                        </Grid>
                    </form>
                    <Typography variant="h6" component="h6" className={marginTop} >
                        Voucher
                    </Typography>
                    <FormControlLabel style={{ marginLeft: -8 }}
                        control={
                            <Checkbox
                                checked={haveVoucher}
                                onChange={() => setHaveVoucher(!haveVoucher)}
                                name="checkedB"
                                color="primary"
                            />
                        }

                        label={<Typography variant="body2" color="textSecondary">I have a voucher code</Typography>}
                    />
                    {haveVoucher && (
                        <form className={root} noValidate autoComplete="off">
                            <Grid container spacing={2} style={{ paddingBottom: 10 }} alignItems="center">
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        InputLabelProps={{
                                            classes: {
                                                root: input,
                                            }
                                        }} id="voucher" label="Voucher" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button fullWidth style={{ marginBottom: -10 }} color="primary" variant="contained">Add voucher</Button>
                                </Grid>

                            </Grid>
                        </form>
                    )}

                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper className={information} elevation={4}>
                    <Typography variant="h6" component="h6">Order summary</Typography>
                    <Grid container>
                        <Grid item xs={6} md={6}>

                            <Typography variant="subtitle1">Billing address:</Typography>

                            <Typography variant="body2">...</Typography>
                            <Typography variant="body2">...</Typography>
                            <Typography variant="body2">...</Typography>
                            <Typography variant="body2">...</Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>

                            <Typography variant="subtitle1">Shipping address:</Typography>

                            <Typography variant="body2">...</Typography>
                            <Typography variant="body2">...</Typography>
                            <Typography variant="body2">...</Typography>
                            <Typography variant="body2">...</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} className={marginTop}>
                            <Typography variant="h6">Your order</Typography>
                            <Typography variant="button">3 items</Typography>
                            <Grid container className={products}>
                                {cartItems.map(cartItem => {
                                    const { id, } = cartItem || {}
                                    return (
                                        <CheckoutItem key={id} cartItem={cartItem} />
                                    )
                                })}


                            </Grid>
                            <Grid container direction="row" style={{ padding: '.8em 0 1em' }}>
                                <Typography variant="subtitle2">Shipping

                                </Typography>
                                <Typography variant="body2" style={{ marginLeft: 4, }}>
                                    GlS - Package deliver to the door - Free
                                </Typography>
                            </Grid>
                            <Divider variant="fullWidth" />
                            <Grid container direction="row" justifyContent="space-between" style={{ padding: '.8em .8em  1em .2em' }}>
                                <Typography variant="subtitle2">Total

                                </Typography>
                                <Typography variant="subtitle2" style={{ marginLeft: 4, }}>
                                    Rs - {total}
                                </Typography>
                            </Grid>

                            <Divider variant="fullWidth" />
                        </Grid>
                    </Grid>

                    <Button variant="contained" color="primary" fullWidth className={marginTop}>Confirm Order</Button>
                </Paper>
            </Grid>
        </Grid>



        // <div className='checkout-page'>
        //     <div className='checkout-header'>
        //         <div className='header-block'>
        //             <span>Product</span>
        //         </div>
        //         <div className='header-block'>
        //             <span>Description</span>
        //         </div>
        //         <div className='header-block'>
        //             <span>Quantity</span>
        //         </div>
        //         <div className='header-block'>
        //             <span>Price</span>
        //         </div>
        //         <div className='header-block'>
        //             <span>Remove</span>
        //         </div>
        //     </div>
        //     <Grid container>
        //         {cartItems.map(cartItem => (
        //             <Grid item key={cartItem.id} md={12}>
        //                 <CheckoutItem cartItem={cartItem} />
        //             </Grid>

        //         ))}
        //     </Grid>

        //     <div className='total'>TOTAL: Rs {total}</div>


        // </div>
    );
}

const mapStateToProps = ({ cart }) => {
    const { cartItems } = cart || {}

    return {
        cartItems,
        total: cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + (cartItem.price * cartItem.quantity),
            0
        )
    }

};

export default connect(mapStateToProps)(CheckoutPage);