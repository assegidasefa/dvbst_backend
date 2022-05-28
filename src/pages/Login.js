import { Button, Checkbox, Container, FormControlLabel, Grid, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { blue, green, purple, red, yellow } from '@material-ui/core/colors';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../Api/auth';

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
            width: "45%",
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



}))



function Login() {


    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const classes = useStyles()
    const navigate = useNavigate();


    const handleSubmit = async (e) => {

        e.preventDefault();
        // setFormErrors(validate(formValues))
        // console.log("---------form values", formValues)
        // const userData = {
        //     email,
        //     password
        // }
        await login(id, password)
        setId("")
        setPassword("")


        // setIsSubmit(true)
        // setFormValues(initialValues)
        navigate('/home')
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <Paper className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography className={classes.my_typography} variant="h5">Login </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">ID </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                className={classes.input_css}
                                autoComplete="id"
                                name="id"
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                autoFocus
                                value={id}
                                onChange={(e) => { setId(e.target.value) }}
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
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
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
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid container justifyContent='center'>
                        <Typography >Don't have an account? </Typography>
                        <Grid item >
                            <Link href="/" variant="body2" color='"#00D05A' style={{ color: "#00d05a" }}>
                                Signup
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login



