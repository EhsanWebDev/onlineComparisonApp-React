import { Grid, makeStyles, Typography, withStyles, createStyles, Button, Paper, Tabs, Tab } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import CustomCarousel from '../../components/Carousel/CustomCarousel'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MicOffIcon from '@material-ui/icons/MicOff';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import RateReviewIcon from '@material-ui/icons/RateReview';

const StyledRating = withStyles((theme) => ({
    iconFilled: {
        color: theme.palette.primary.main,
    },
    sizeSmall: {
        fontSize: "1rem"
    }
}))(Rating);
const useStyles = makeStyles((theme) =>
    createStyles({
        specContainer: {
            margin: "0 0 .6em",
        },
        specText: {
            marginLeft: ".6em",
        },


    })
);
const ProductDetail = () => {
    const { specContainer, specText } = useStyles()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container spacing={3} style={{ margin: '3em 0 18em' }}>
            <Grid item md={6}>
                <CustomCarousel autoPlay={false} showArrows={false} showThumbs={true} />
            </Grid>
            <Grid item md={6}>
                <Typography variant="h5">Product Name</Typography>
                <Grid container direction="row" alignItems="center" className={specContainer}>
                    <StyledRating precision={0.5} color="primary" emptyIcon={<StarBorderIcon fontSize="inherit" />} readOnly name="half-rating" defaultValue={2.5} size="small" />
                    <Typography variant="body2" className={specText}>2.5 (99)</Typography>
                </Grid>
                <Grid container direction="row" alignItems="center" className={specContainer}>
                    <LineWeightIcon size="small" />
                    <Typography variant="body2" className={specText}>1 TON</Typography>
                </Grid>
                <Grid container direction="row" alignItems="center" className={specContainer}>
                    <OfflineBoltIcon size="small" />
                    <Typography variant="body2" className={specText}>900 W</Typography>
                </Grid>
                <Grid container direction="row" alignItems="center" className={specContainer}>
                    <AcUnitIcon size="small" />
                    <Typography variant="body2" className={specText}>8200 BTU/h</Typography>
                </Grid>
                <Grid container direction="row" alignItems="center" className={specContainer}>
                    <MicOffIcon size="small" />
                    <Typography variant="body2" className={specText}>Noise free</Typography>
                </Grid>
                <Grid container direction="row" alignItems="center" className={specContainer}>
                    <SettingsRemoteIcon size="small" />
                    <Typography variant="body2" className={specText}>Wi-Fi connectivity</Typography>
                </Grid>
                <Typography variant="h6" style={{ margin: "1.5em 0 .2em .2em" }}>Rs 85,000</Typography>
                <Grid container direction="row" alignItems="center" className={specContainer}>
                    <CheckCircleOutlineIcon style={{ fontSize: 18 }} />
                    <Typography variant="caption" color="primary" className={specText}>Price Match Guarantee</Typography>
                </Grid>
                <Button variant="contained" color="primary"><AddShoppingCartIcon fontSize="small" style={{ margin: '0 .3em 0 0' }} /> Add to cart</Button>
            </Grid>

            <Grid item xs={12} md={12}>
                <Paper >
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab icon={<DescriptionIcon />} label="Description" />
                        <Tab icon={<LibraryBooksIcon />} label="Specifications" />
                        <Tab icon={<RateReviewIcon />} label="Reviews" />

                    </Tabs>
                </Paper>

                {value === 0 && <Typography variant="body2" style={{ padding: '2em 25em 2em .5em', textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veritatis, optio asperiores voluptates reiciendis eum, molestiae fuga quia amet commodi suscipit! Pariatur eveniet, at sequi sunt illo laborum non eum commodi maxime, minima similique quasi culpa dignissimos possimus magni perspiciatis.</Typography>}
                {value === 1 && <Grid container style={{ padding: '2em .5em' }}>
                    <Grid container direction="row" alignItems="center" className={specContainer}>
                        <Typography variant="button" className={specText}>Brand</Typography>
                        <Typography variant="body2" className={specText}>PEL</Typography>
                    </Grid>
                    <Grid container direction="row" alignItems="center" className={specContainer}>
                        <Typography variant="button" className={specText}>Wi-Fi</Typography>
                        <Typography variant="body2" className={specText}>Yes</Typography>
                    </Grid>
                    <Grid container direction="row" alignItems="center" className={specContainer}>
                        <Typography variant="button" className={specText}>Color</Typography>
                        <Typography variant="body2" className={specText}>White</Typography>
                    </Grid>
                    <Grid container direction="row" alignItems="center" className={specContainer}>
                        <Typography variant="button" className={specText}>Heat & Cool</Typography>
                        <Typography variant="body2" className={specText}>No</Typography>
                    </Grid>
                </Grid>}

            </Grid>
        </Grid>
    )
}

export default ProductDetail
