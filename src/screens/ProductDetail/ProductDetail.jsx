import { Grid, makeStyles, Typography, withStyles, createStyles, Button, Box, Hidden, Container } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React, { useState } from 'react'

import LineWeightIcon from '@material-ui/icons/LineWeight';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MicOffIcon from '@material-ui/icons/MicOff';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

import ProgressBar from '../../components/ProgressBar'
import Review from '../../components/Reviews/Review'
import { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CustomTable from '../../components/Table/CustomTable'
import Sidebar from '../../components/Sidebar/Sidebar'
import TextWithIconRight from '../../components/TextWithHorizontalIcon/TextWithIconRight'
import { Compare, BurstMode, Sms } from '@material-ui/icons';
import { connect } from 'react-redux';
import { addCompareItem } from '../../redux/compare/compare.actions';
const StyledRating = withStyles((theme) => ({
    // iconFilled: {
    //     color: "#E58070",
    // },
    sizeSmall: {
        fontSize: "1rem"
    }
}))(Rating);



const useStyles = makeStyles((theme) =>
    createStyles({
        specContainer: {
            margin: "0 0 .6em 0em",
        },
        specText: {
            marginLeft: ".6em",
        },
        marginTopSm: {
            marginTop: '.4em',
        },
        marginTop: {
            marginTop: '.6em',
        },
        marginTopLg: {
            marginTop: '.8em',
        },
        review: {
            // flexBasis: "25%",
        },
        CTA_Btn: {
            transition: ".6s",
            "&.active": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
                "&:hover": {
                    backgroundColor: "white",
                    color: "#000",
                }
            },
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white"
            }
        }


    })
);
const ProductDetail = ({ history, compare, addCompareItem, match }) => {
    const { specContainer, review, specText, CTA_Btn, marginTopSm, marginTopLg } = useStyles()
    const [value, setValue] = useState(4);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const rows = [
        { name: "Announced", value: "2021, August 12" },
        { name: "Status", value: "Available. Released 2021, August 12" },
    ];
    const handleCompare = () => {
        const { params: { id } } = match || {}
        const item = rows.map(i => {
            return {
                title: i.name,
                first: i.value,
                second: ""
            }
        })
        addCompareItem({ firstPId: Number(id), secondPId: 0, rows: item })
        history.push("/compare")
    }
    return (
        <div style={{ margin: '4em 0 10em' }}>
            <Grid container spacing={3}>

                <Grid item md={9} lg={9}>

                    {/* <Typography variant="caption">Specifications</Typography> */}
                    <Grid container spacing={4} style={{ margin: '2em 0 18em' }} >

                        <Grid item xs={6} md={6}>
                            <LazyLoadImage style={{ width: '100%' }} src="https://i.gadgets360cdn.com/large/nokia_air_conditioner_image_flipkart_1608556296721.jpg" />
                            {/* <CustomCarousel autoPlay={false} showArrows={false} showThumbs={true} /> */}
                        </Grid>
                        <Grid item xs={6} md={6}  >
                            <Typography variant="h4" component="h4">Product Name</Typography>
                            <Grid container direction="row" alignItems="center" className={specContainer}>
                                <StyledRating precision={0.5} color="primary" readOnly name="half-rating" defaultValue={2.5} size="small" />
                                <Typography variant="body2" className={specText}>2.5 (99)</Typography>
                            </Grid>
                            <Grid container>
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
                                    <Typography variant="body2" className={specText}>Wi-Fi</Typography>
                                </Grid>
                                {/* <Grid container direction="row" alignItems="center" className={specContainer}>
                                    <Button className={marginTopLg} variant="contained" color="primary">compare</Button>
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Hidden mdUp>
                            <TextWithIconRight onClick={handleCompare} />
                            <TextWithIconRight title="Opinions" IconName={<Sms />} />
                            <TextWithIconRight title="Pictures" IconName={<BurstMode />} />
                        </Hidden>
                        <Hidden smDown>

                            <Container>

                                <Box display="flex" flex={1}>
                                    <Button className={`${CTA_Btn} active`} onClick={handleCompare} variant="outlined"><Compare style={{ marginRight: 4 }} fontSize="small" /> Compare</Button>
                                    <Button className={CTA_Btn} variant="outlined"><Sms style={{ marginRight: 4 }} fontSize="small" /> Opinions</Button>
                                    <Button className={CTA_Btn} variant="outlined"> <BurstMode style={{ marginRight: 4 }} fontSize="small" /> Pictures</Button>
                                </Box>
                            </Container>
                        </Hidden>



                        <Box flex={1} className={marginTopLg}>
                            <CustomTable rows={rows} />
                            <CustomTable rows={rows} />
                            <CustomTable rows={rows} />
                            <CustomTable rows={rows} />
                        </Box>



                        <Grid item xs={12} md={12}>
                            {/* <Paper style={{ marginTop: "4em" }} >
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
                            </Paper> */}

                            {value === 0 && <Typography variant="body2" style={{ padding: '2em 5em 2em .5em', }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veritatis, optio asperiores voluptates reiciendis eum, molestiae fuga quia amet commodi suscipit! Pariatur eveniet, at sequi sunt illo laborum non eum commodi maxime, minima similique quasi culpa dignissimos possimus magni perspiciatis.</Typography>}
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
                            {value === 2 &&
                                <>
                                    <Grid container direction="column" alignItems="center" style={{ padding: '2em .5em' }}>
                                        <Grid container direction="column" alignItems="center" >
                                            <Typography variant="h3">4.0</Typography>
                                            <StyledRating precision={0.5} readOnly name="half-rating" defaultValue={4.0} size="medium" />
                                            <Typography className={marginTopSm} variant="subtitle2">Based on 23 reviews</Typography>
                                        </Grid>
                                        <Grid container className={marginTopLg} direction="column" alignItems="center" justifyContent="center">
                                            <Grid container md={6} direction="row" alignItems="center"  >
                                                <Typography className={review} variant="body2" >5</Typography>
                                                <ProgressBar value={88} />
                                            </Grid>
                                            <Grid container md={6} direction="row" alignItems="center"  >
                                                <Typography className={review} variant="body2" >4</Typography>
                                                <ProgressBar value={75} color="#A6D632" />
                                            </Grid>
                                            <Grid container md={6} direction="row" alignItems="center"  >
                                                <Typography className={review} variant="body2" >3</Typography>
                                                <ProgressBar value={50} color="#F6E72F" />
                                            </Grid>
                                            <Grid container md={6} direction="row" alignItems="center"  >
                                                <Typography className={review} variant="body2" >2</Typography>
                                                <ProgressBar value={25} color="#F6A420" />
                                            </Grid>
                                            <Grid container md={6} direction="row" alignItems="center"  >
                                                <Typography className={review} variant="body2" >1</Typography>
                                                <ProgressBar value={10} color="#EE3B0F" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Review />
                                    <Review />
                                    <Review />
                                    <Review />
                                    <Review />
                                </>

                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} lg={3}>
                    <Hidden smDown>
                        <Sidebar />
                    </Hidden>
                </Grid>
            </Grid>

        </div>

    )
}

const mapStateToProps = ({ compare }) => ({
    compare: compare.compareItems
})

const mapDispatchToProps = dispatch => ({
    addCompareItem: item => dispatch(addCompareItem(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
