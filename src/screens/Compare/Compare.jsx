import { Divider, Grid, makeStyles, Typography, createStyles, TextField, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Breadcrumbs, Link } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { products_data } from '../../data'
import 'react-lazy-load-image-component/src/effects/blur.css';


const useStyles = makeStyles((theme) => createStyles({
    marginTop: {
        marginTop: theme.spacing(2)
    },
    auto_img: {
        height: 'auto', paddingTop: 8, maxWidth: 160, width: 30, objectFit: 'contain',
        [theme.breakpoints.down('xs')]: {
            width: 50,
        },
        [theme.breakpoints.up('sm')]: {
            width: 50,

        },
        [theme.breakpoints.up('md')]: {
            // width: "33%",
        },
        [theme.breakpoints.up('lg')]: {
            // width: "25%",
        },
    },
    input: {
        padding: "0 .3em"
    },
    auto_brand: {
        fontSize: ".65rem", whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
        fontWeight: 300,
    },
    auto_title: {
        fontSize: ".7rem", whiteSpace: "nowrap", flexBasis: '70%',
        overflow: "hidden", textOverflow: "ellipsis",
        marginLeft: 4,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 8
        },
        [theme.breakpoints.up('sm')]: {
            flexBasis: '85%',
            marginLeft: 8
        },
        [theme.breakpoints.up('md')]: {
            flexBasis: '90%',
            // width: "33%",
        },
        [theme.breakpoints.up('lg')]: {
            flexBasis: '90%',
            // width: "25%",
        },
    },
    tableHeader: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase'
    },
    product_info: {
        // fontSize: '.75rem',


    },
    review_title: {
        fontSize: '.8rem'
    },
    table_cell: {
        textAlign: 'center',
        width: "33%",
        [theme.breakpoints.down('xs')]: {
            padding: ".5em .5em"
        },
        [theme.breakpoints.up('sm')]: {
            width: "40%",
        },
        [theme.breakpoints.up('md')]: {
            width: "33%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "25%",
        },

    }
}))



const product = {
    id: 1, name: 'Gree AC', image: "https://i.gadgets360cdn.com/large/nokia_air_conditioner_image_flipkart_1608556296721.jpg",
    price: 60000
}

const Compare = ({ history }) => {
    const {
        marginTop, tableHeader, product_info, table_cell,
        review_title, auto_img, auto_title, auto_brand,
        input
    } = useStyles() || {}

    const renderOption = (item, rest) => {
        const { name, brand, image } = item || {}
        const { selected } = rest || {}
        return (
            <Box flex={1} display="flex" alignItems="center" justifyContent="space-between" co>
                <Box display="flex" alignItems="center" flex={1} >
                    <LazyLoadImage effect="blur" src={image} className={auto_img} />
                    <Typography variant="subtitle2" className={auto_title} >{name}</Typography >
                </Box>
                {/* <Typography variant="caption" className={auto_brand} >{brand}</Typography > */}
            </Box>
        )

    }
    const CompareItem = () => {
        return (
            <Grid item xs={4} sm={5} md={4} lg={3}  >
                <Typography variant="h6" style={{ textAlign: 'center', margin: '1em 0', fontSize: '.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Gree Ac</Typography>
                <img src={product.image} style={{ width: '100%' }} />

            </Grid>
        )
    }
    function handleClick(event) {
        event.preventDefault();
        history.push('/')

    }
    return (
        <div style={{ marginTop: "2em" }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Home
                </Link>

                <Typography color="textPrimary">Comparison</Typography>
            </Breadcrumbs>
            <Typography variant="h5" >Compare</Typography>
            <Typography variant="body2">Specifications</Typography>
            <Divider className={marginTop} />
            <Grid container className={marginTop} spacing={1}>
                <Grid item sm={2} md={4} lg={6} />
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Autocomplete
                        classes={{ option: input }}
                        id="free-solo-2-demo"
                        renderOption={renderOption}

                        options={products_data}
                        getOptionLabel={option => option.name}
                        filterSelectedOptions
                        size="small"
                        disableClearable
                        ListboxProps={
                            {
                                style: {
                                    maxHeight: '10em',
                                    padding: 0

                                }
                            }
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="First Product"
                                placeholder="Search First Product"
                                size="small"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                            />
                        )}
                        getOptionSelected={(option, value) => option.id === value.id}

                    />
                </Grid>
                <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Autocomplete
                        classes={{ option: input }}
                        id="free-solo-2-demo"
                        renderOption={renderOption}
                        options={products_data}
                        getOptionLabel={option => option.name}
                        filterSelectedOptions
                        size="small"
                        disableClearable
                        ListboxProps={
                            {
                                style: {
                                    maxHeight: '10em',

                                }
                            }
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Second Product"
                                placeholder="Search Second Product"
                                size="small"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                            />
                        )}
                        getOptionSelected={(option, value) => option.id === value.id}
                    />
                </Grid>
            </Grid>

            <Grid container className={marginTop} alignItems="center" spacing={2}>
                <Grid item xs={4} sm={2} md={4} lg={6}>
                </Grid>
                <CompareItem />
                <CompareItem />
            </Grid>
            <Grid container>
                <Grid item xs={12} md={12} className={marginTop}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead >
                                <TableRow >
                                    <TableCell className={tableHeader}>Launch</TableCell>
                                    <TableCell className={tableHeader}></TableCell>
                                    <TableCell className={tableHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2" className={review_title} >Announced</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>2019, September 10</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>2019, September 10</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} md={12} className={marginTop}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead >
                                <TableRow >
                                    <TableCell className={tableHeader}>Body</TableCell>
                                    <TableCell className={tableHeader}></TableCell>
                                    <TableCell className={tableHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2" className={review_title}>Dimensions</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>150.9 x 75.7 x 8.3 mm</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>150.9 x 75.7 x 8.3 mm</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2" className={review_title}>Weight</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>194 g (6.84 oz)</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>194 g (6.84 oz)</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} md={12} className={marginTop}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead >
                                <TableRow >
                                    <TableCell className={tableHeader}>Comms</TableCell>
                                    <TableCell className={tableHeader}></TableCell>
                                    <TableCell className={tableHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2" className={review_title}>Wi-Fi</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>Yes</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>No</Typography>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} md={12} className={marginTop}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead >
                                <TableRow >
                                    <TableCell className={tableHeader}>Features</TableCell>
                                    <TableCell className={tableHeader}></TableCell>
                                    <TableCell className={tableHeader}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2" className={review_title}>Sensors</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>accelerometer, gyro, proximity,</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>accelerometer, gyro, proximity,</Typography>
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2"></Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>Ultra Wideband (UWB) support</Typography>
                                    </TableCell>
                                    <TableCell className={table_cell}>
                                        <Typography variant="caption" className={product_info}>Ultra Wideband (UWB) support</Typography>
                                    </TableCell>

                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}


export default Compare
