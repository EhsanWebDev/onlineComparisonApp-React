import { LinearProgress, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react'


// const BorderLinearProgress = withStyles((theme) => {
//     return ({


//     })
// })(LinearProgress);

const useStyles = props => makeStyles((theme) => {
    return (
        {
            root: {
                height: 8,
                borderRadius: 5,
                marginLeft: 20,
                flexGrow: 4,
            },
            colorPrimary: {
                backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],

            },
            bar: {
                backgroundColor: props,
                borderRadius: 5,

            },


        }
    )
}

);
const ProgressBar = ({ color = "#4AA44A", value = 33 }) => {
    const { bar, colorPrimary, root } = useStyles(color)()
    return (
        <LinearProgress classes={{ root, colorPrimary, bar }} variant="determinate" value={value} />
    )
}

export default ProgressBar
