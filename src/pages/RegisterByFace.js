
import { Avatar, Button, Grid, Link, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
// import faceRecognitionImage from '../../assets/ios-face-recognition-svgrepo-com .jpg'

import faceRecognitionImage from '../assets/ios-face-recognition-svgrepo-com .jpg'

const useStyles = makeStyles((theme) => ({

    root: {
        background: '#FFFFFF',
        minHeight: "100vh",
        [theme.breakpoints.up('sm')]: {
            background: '#2F313D',
        },
        display: "grid",
        placeItems: "center"

    },

    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        height: "55%",
        width: "0%",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        },
        [theme.breakpoints.up('sm')]: {
            width: "35%",
        },
        [theme.breakpoints.up('md')]: {
            width: "30%",

        },
        [theme.breakpoints.up('lg')]: {
            width: "20%",

        },

        padding: 20,


    },

    input_css: {
        '& > *': {
            margin: theme.spacing(.5),
            width: '100%',
            height: 35.0,
        },
    },
    my_typography: {
        fontWeight: 600
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    mybutton: {
        width: "100%",
        backgroundColor: "#00D05A"
    },
    my_confirm: {
        display: "grid",
        justifyContent: "center"
    },
    submit: {
        margin: theme.spacing(1, 0, 1),
        display: "grid",
        justifyContent: "center"
    },
    image_styles: {
        // height: "50%",
        // width: "50%",
        // height: "50px",
        // borderRadius: "50%",
        backgroundColor: "red"
    },
    avater_sytles: {

        height: "20vh",
        display: "grid",
        placeItems: "center",

        // alignItems:"center"
    }

}))



function RegisterByFace() {
    const classes = useStyles()
    // const preventDefault = (event) => event.preventDefault();
    return (
        <Grid item xs={12} className={classes.root}>
            <Paper className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography className={classes.my_typography} variant="h5">Signup by scanning your face </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.avater_sytles}>
                        <Avatar style={{ backgroudColor: "#D3E8E6", width: "150px", height: "150px" }} className={classes.image_styles} alt="Travis Howard" src={faceRecognitionImage} />
                    </Grid>
                    <Grid item xs={12} className={classes.submit}>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.mybutton}
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid container justifyContent='center'>
                        <Typography >Don't have an account? </Typography>
                        <Grid item >
                            <Link href="#" variant="body2" color='"#00D05A' style={{ color: "#00d05a" }}>
                                Signup
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}

export default RegisterByFace



