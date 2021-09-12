import { Avatar, Grid, Typography, makeStyles, Divider } from '@material-ui/core'
import React from 'react'
import StarsComponent from '../StarsComponent/StarsComponent'

const useStyles = makeStyles(theme => {
    const { palette: { type } } = theme || {}
    return {
        nameAndStars: {
            marginLeft: theme.spacing(1) + 2
        },
        name: {
            fontSize: '1rem'
        },
        root: {
            marginTop: theme.spacing(2),
            padding: ".5em 0 3em",
        },
        title: {
            color: type === "light" ? "#616161" : '#bdbdbd'
        },
        desc: {
            color: type === "light" ? "#757575" : '#e0e0e0',
            padding: "0 1em 0 0",
        },
        user_avatar: { display: 'flex', alignItems: 'center', marginTop: theme.spacing(1) },
        title_container: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: theme.spacing(2) },
    }
})
const Review = () => {
    const { nameAndStars, desc, name, root, title, user_avatar, title_container } = useStyles()
    return (
        <>
            <Divider />
            <Grid container className={root} spacing={2}>
                <Grid item md={4}>
                    <div className={user_avatar} >
                        <Avatar>E</Avatar>
                        <Grid container direction="column" className={nameAndStars}>
                            <Typography className={name} variant="caption">Ehsan Ahmad</Typography>
                            <StarsComponent />
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={8}>
                    <div className={title_container}>
                        <Typography variant="h5" className={title}>Just what I was looking for</Typography>
                        <Typography variant="caption" className={title}>2 days ago</Typography>
                    </div>

                    <Typography variant="body2" className={desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae dignissimos numquam saepe ducimus fuga asperiores eaque tenetur laboriosam fugit.</Typography>

                </Grid>
            </Grid>

        </>

    )
}

export default Review
