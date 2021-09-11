import { Grid, makeStyles, Paper, TextField, Typography, createStyles, Button } from '@material-ui/core'
import React from 'react'

import RoomIcon from '@material-ui/icons/Room';
import { Email, Phone } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
    createStyles({
        information: {
            padding: theme.spacing(2),
            marginBottom: theme.spacing(2)
        },
        marginTop: {
            marginTop: theme.spacing(2),
        },
        marginSm: {
            marginTop: theme.spacing(1),
        },
        marginLeft: {
            marginLeft: theme.spacing(1),
        },
        input: {
            fontSize: ".85rem"
        },


    })
);
const ContactUs = () => {
    const { information, input, marginTop, marginSm, marginLeft } = useStyles() || {}
    return (
        <Grid container justifyContent="center" style={{ margin: '4em 0 8em' }} >
            <Grid item xs={12} md={10} lg={8}>
                <Paper elevation={4} className={information} >
                    <Typography variant="h6" component="h6" style={{ textAlign: 'center', }}>
                        GET IN TOUCH
                    </Typography>
                    <Grid container className={marginTop} alignItems="center" style={{ padding: '.5em 2em 2em' }}>
                        <Grid item md={6} className={marginSm} >
                            <Grid container direction="row" alignItems="center" className={marginSm}>
                                <RoomIcon fontSize="small" />
                                <Typography className={marginLeft} variant="caption">123, Main Raiwind Road, Lahore, Pakistan</Typography>
                            </Grid>
                            <Grid container direction="row" alignItems="center" className={marginSm}>
                                <Email fontSize="small" />
                                <Typography className={marginLeft} variant="caption">Company@hotmail.com</Typography>
                            </Grid>
                            <Grid container direction="row" alignItems="center" className={marginSm}>
                                <Phone fontSize="small" />
                                <Typography className={marginLeft} variant="caption">+92 300 1234567</Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <form noValidate autoComplete="off">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            fullWidth
                                            InputLabelProps={{
                                                classes: {
                                                    root: input,
                                                }
                                            }} className={input} id="name" label="Name" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField fullWidth InputLabelProps={{
                                            classes: {
                                                root: input,
                                            }
                                        }} className={input} id="email" label="Email" />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            fullWidth minRows={4}
                                            multiline maxRows={8}
                                            InputLabelProps={{
                                                classes: {
                                                    root: input,
                                                }
                                            }} id="company" label="Write your message here" />
                                    </Grid>

                                    <Button className={marginTop} color="primary" fullWidth variant="contained">Send</Button>


                                </Grid>
                            </form>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>
        </Grid>
    )
}

export default ContactUs
