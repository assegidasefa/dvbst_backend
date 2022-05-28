import { Button, Checkbox, Container, FormControlLabel, Grid, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import * as React from 'react';



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
        height: "75%",
        // width: "0%",
        [theme.breakpoints.down('sm')]: {
            width: "85%",
        },
        [theme.breakpoints.up('sm')]: {
            width: "45%",
        },
        [theme.breakpoints.up('md')]: {
            width: "35%",

        },
        [theme.breakpoints.up('lg')]: {
            width: "25%",

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



}))



function Register() {
    const classes = useStyles()
    const preventDefault = (event) => event.preventDefault();
    return (
        <Grid item xs={12} className={classes.root}>
            <Paper className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography className={classes.my_typography} variant="h5">Register </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">Frist Name </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                className={classes.input_css}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <Typography variant="subtitle1">Last Name</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                className={classes.input_css}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                // label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <Typography variant="subtitle1">ID</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input_css}
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                // label="Email Address"
                                name="id"
                                autoComplete="id"
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <Typography variant="subtitle1">Password</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input_css}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <Typography variant="subtitle1">Confirm Password</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input_css}
                                variant="outlined"
                                required
                                fullWidth
                                name="Cpassword"
                                // label="Password"
                                type="password"
                                id="Cpassword"
                                autoComplete="Confirm-password"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.my_confirm}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I would like to be  candidate."
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.submit}>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.mybutton}
                        >
                            Continue
                        </Button>
                    </Grid>
                    <Grid container justifyContent='center'>
                        <Typography >Already have an account? </Typography>
                        <Grid item >
                            <Link href="/auth/signin" variant="body2" color='"#00D05A' style={{ color: "#00d05a" }}>
                                Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register



