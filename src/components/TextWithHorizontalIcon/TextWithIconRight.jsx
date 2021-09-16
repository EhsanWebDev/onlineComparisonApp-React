import { makeStyles, createStyles, Container, Box, Typography } from "@material-ui/core"
import { Compare, NavigateNext, BurstMode, Sms } from '@material-ui/icons';

const useStyles = makeStyles((theme) => createStyles({

    marginTop: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        cursor: "pointer",
    },
    box: {
        borderBottom: "1px solid #e0dede",
        paddingBottom: theme.spacing(1),
    },
    titleStyles: {
        marginLeft: theme.spacing(1)
    },
    icon: {
        color: theme.palette.primary.main
    },

}))
const TextWithIconRight = ({ title = "Compare", IconName = <Compare />, onClick = () => { } }) => {
    const { marginTop, icon, titleStyles, box } = useStyles()
    return (
        <Container className={marginTop}>
            <Box className={box} flex={1} display="flex" justifyContent="space-between" alignItems="center" onClick={onClick}>
                <Box display="flex" alignItems="center">
                    {IconName}
                    <Typography variant="body1" className={titleStyles}>{title}</Typography>
                </Box>
                <NavigateNext className={icon} />
            </Box>
        </Container>
    )
}

export default TextWithIconRight
