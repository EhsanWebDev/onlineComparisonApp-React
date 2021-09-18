import { Box, Card, Grid, Paper, Typography } from "@material-ui/core"
import { LazyLoadImage } from "react-lazy-load-image-component"


const SimilarProduct = () => {
    return (
        <Paper elevation={2} style={{ margin: '0 0 1em ', cursor: 'pointer' }}>
            <Box display="flex" justifyContent="space-around" alignItems="center" style={{ padding: '.5em 1em', }}>
                <LazyLoadImage style={{ width: '50%' }} src="https://i.gadgets360cdn.com/large/nokia_air_conditioner_image_flipkart_1608556296721.jpg" />
                <Box style={{ marginLeft: 10 }}>
                    <Typography variant="subtitle2">Gree A.C </Typography>
                    <Typography variant="caption">Gree</Typography>
                </Box>
            </Box>
        </Paper>

    )
}

export default SimilarProduct
