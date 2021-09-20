import {
    Container, makeStyles, Paper, Table,
    TableBody, TableCell, TableContainer, TableHead, TableRow, createStyles, Typography
} from "@material-ui/core"


const useStyles = makeStyles((theme) => createStyles({
    table_heading: {
        color: theme.palette.primary.main
    },
    table_text: {

    },
}))
const CustomTable = ({ rows = [], title = "Launch" }) => {
    const { table_heading, table_text } = useStyles()
    return (
        <Container style={{ marginBottom: '1em' }}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell size="small" colSpan="2">
                                <Typography className={table_heading}>
                                    {title}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell size="small">
                                    <Typography variant="subtitle2" className={table_text}>
                                        {row.name}
                                    </Typography>

                                </TableCell>
                                <TableCell size="small">
                                    <Typography variant="caption" className={table_text}>
                                        {row.value}
                                    </Typography>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

    )
}

export default CustomTable
