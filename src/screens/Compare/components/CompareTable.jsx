import {
    Container, makeStyles, Paper, Table,
    TableBody, TableCell, TableContainer, TableHead, TableRow, createStyles, Typography
} from "@material-ui/core"

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
        fontSize: ".65rem",
        whiteSpace: "nowrap",
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
const CompareTable = ({ title = "Announced", first = "2019, September 10", second = "2019, September 10" }) => {
    const {
        marginTop, tableHeader, product_info, table_cell,
        review_title, auto_img, auto_title, auto_brand,
        input
    } = useStyles() || {}
    return (
        <TableContainer component={Paper} style={{ marginBottom: '1.1em' }}>
            <Table aria-label="simple table">
                <TableHead >
                    <TableRow >
                        <TableCell colSpan="4" className={tableHeader}>Launch</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell size="small">
                            <Typography variant="subtitle2" className={review_title} >{title}</Typography>
                        </TableCell>
                        <TableCell size="small" className={table_cell}>
                            <Typography variant="caption" className={product_info}>{first}</Typography>
                        </TableCell>
                        <TableCell size="small" className={table_cell}>
                            <Typography variant="caption" className={product_info}>{second}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CompareTable

