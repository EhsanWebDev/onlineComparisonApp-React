import { withStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react'


const StyledRating = withStyles((theme) => ({
    // iconFilled: {
    //     color: "#E58070",
    // },
    sizeSmall: {
        fontSize: "1rem"
    }
}))(Rating);
const StarsComponent = () => {
    return (

        <StyledRating precision={0.5} readOnly name="half-rating" defaultValue={4.0} size="small" />

    )
}

export default StarsComponent
