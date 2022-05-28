import { Box } from '@material-ui/core';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react'
// import Voting_Svg from '../../Voting_Svg';
import VotingSvg from "../Voting_Svg"
// import Navbar from '../components/Navbar'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    body: {
        padding: theme.spacing(4),
        backgroundColor: "#2F313D",
        minHeight: "100vh"
    },
    my_typography: {
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    mobile_typography: {
        color: "#fff",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    mobile_layout: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    web_layout: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
        color: "#fff"
    },


}));


function BeforeVoting() {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('Apr 24 , 2022 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
            const seconds = Math.floor((distance % (1000 * 60) / (1000)))

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })


    const classes = useStyles()
    return (
        <Grid container className={classes.body}>
            {/* <Navbar /> */}
            <Grid container direction='row'>
                <Grid xs={12} sm={9} md={7} lg={7} container justifyContent='center' alignContent='flex-start' >

                    <Typography className={classes.my_typography} color="white" variant='h1'  >
                        Voting <span style={{ color: "#00D05A", fontFamily: "Poppins", fontWeight: "SemiBold" }}>
                            opens</span> in <br />
                        {/* {timerDays} : {timerHours} : {timerMinutes} : {timerSeconds} */}
                    </Typography>

                    <Typography className={classes.mobile_typography} color="white" variant='h3'  >
                        Voting  <span style={{ color: "#00D05A", fontFamily: "Poppins", fontWeight: "SemiBold" }}>
                            opens</span> in <br />
                        {/* {timerDays} : {timerHours} : {timerMinutes} : {timerSeconds} */}
                    </Typography>
                    <Typography className={classes.mobile_typography} variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, egestas vitae at nisl felis in libero, aliquet in.

                    </Typography>
                    {/* <Typography variant='h4'> Days : Hours : Mintues : Seconds</Typography> */}
                    <Box display="flex" justifyContent="space-between"
                        // ml={10}
                        width="100%"
                        // style={{ borderStyle: "dashed", width: "100%", borderColor: "black" }}
                        mb={5}
                        className={classes.web_layout}
                    >
                        <Box display="flex" flexDirection="column" >
                            <Typography className={classes.my_typograghy} variant='h1'>{timerDays}</Typography>
                            <Typography className={classes.my_typograghy} variant='h4'>Days</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.my_typograghy} variant='h1'>{timerHours}</Typography>
                            <Typography className={classes.my_typograghy} variant='h4'>Hours</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.my_typograghy} variant='h1'>{timerMinutes}</Typography>
                            <Typography className={classes.my_typograghy} variant='h4'>Mintues</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.my_typograghy} variant='h1'>{timerSeconds}</Typography>
                            <Typography className={classes.my_typograghy} variant='h4'>Seconds</Typography>
                        </Box>

                    </Box>
                </Grid>
                <Grid container xs={12} sm={12} md={5} lg={5} alignContent="center" justifyContent='center'>
                    <VotingSvg />
                </Grid>
                <Grid container xs={12} justifyContent="center"
                    //  style={{ borderStyle: "dashed", width: "100%", borderColor: "black" }}
                    className={classes.mobile_layout}>

                    <Box display="flex"
                        // width="100%"
                        justifyContent="space-between"
                        // style={{ borderStyle: "dashed", width: "100%", borderColor: "black" }}
                        mb={5}
                    >
                        <Box display="flex" flexDirection="column" >
                            <Typography className={classes.mobile_typography} variant='h3'>{timerDays}</Typography>
                            <Typography className={classes.mobile_typography} variant='h6'>Days</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" >
                            <Typography className={classes.mobile_typography} variant='h3'>{timerHours}</Typography>
                            <Typography className={classes.mobile_typography} variant='h6'>Hours</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.mobile_typography} variant='h3'>{timerMinutes}</Typography>
                            <Typography className={classes.mobile_typography} variant='h6'>Mintues</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.mobile_typography} variant='h3'>{timerSeconds}</Typography>
                            <Typography className={classes.mobile_typography} variant='h6'>Seconds</Typography>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BeforeVoting