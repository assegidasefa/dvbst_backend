import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
import Voting_Svg from '../Voting_Svg'
// import Navbar from '../Navbar'

const useStyles = makeStyles((theme) => ({

    web_layout: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    mobile_layout: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    web_typogrphy: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        color: "white"
    },
    my_typograghy: {
        color: "#fff"
    },
    mobile_typograpy: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
        color: "white"
    },

    body: {
        padding: theme.spacing(4),
        backgroundColor: "#2F313D",
        minHeight: "100vh"
    },



}));

function VotingUnderway() {

    const classes = useStyles()

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()
    const startTimer = () => {
        const countdownDate = new Date('Apr 11 , 2022 00:00:00').getTime()

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
    return (
        <Grid container className={classes.body}>
            <Grid container direction='row' >
                <Grid xs={12} sm={9} md={7} lg={7} container justifyContent='center' alignContent='flex-start' >
                    <Box display="flex">

                        <Typography className={classes.web_typogrphy} color="white" variant='h1'  >
                            Section <span style={{ color: "#00D05A", fontFamily: "Poppins", fontWeight: "SemiBold" }}>
                                Election</span><br /> is Underwayy

                        </Typography>
                        <Typography color="white" variant='h3' className={classes.mobile_typograpy}  >
                            Section <span style={{ color: "#00D05A", fontFamily: "Poppins", fontWeight: "SemiBold" }}>
                                Election</span><br /> is Underway

                        </Typography>
                    </Box>
                    <Grid item xs={9}
                        className={classes.web_layout}
                    >

                        <Box display="flex" justifyContent="space-around"
                            // style={{ borderStyle: "dashed", width: "100%", borderColor: "black" }}
                            mb={5}
                        >
                            <Box display="flex" flexDirection="column">
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
                            {/* </Box> */}
                        </Box>

                    </Grid>
                    <Box display="flex" ml={15}
                        style={{ width: "100%" }}
                        className={classes.web_layout}>

                        <Button variant="outlined"
                            style={{
                                borderRadius: 5,
                                padding: "10px 36px",
                                fontSize: "14px",
                                borderColor: "#00D05A",
                                minWidth: "150px"
                            }}
                        >
                            <Link href="#" underline="none" color="#00D05A">
                                Enter Election
                            </Link>
                        </Button>
                    </Box>

                </Grid>
                <Grid container xs={12} sm={12} md={5} lg={5} alignContent="center" justifyContent='center'>
                    <Voting_Svg />
                </Grid>
                <Grid item xs={12} className={classes.mobile_layout}>

                    <Box display="flex" justifyContent="space-around"
                        style={{ borderStyle: "dashed", width: "100%", borderColor: "black" }}
                        mb={5}

                    >
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.my_typograghy} variant='h3'>{timerDays}</Typography>
                            <Typography className={classes.my_typograghy} variant='h6'>Days</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.my_typograghy} variant='h3'>{timerHours}</Typography>
                            <Typography className={classes.my_typograghy} variant='h6'>Hours</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.my_typograghy} variant='h3'>{timerMinutes}</Typography>
                            <Typography className={classes.my_typograghy} variant='h6'>Mintues</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.my_typograghy} variant='h3'>{timerSeconds}</Typography>
                            <Typography className={classes.my_typograghy} variant='h6'>Seconds</Typography>
                        </Box>
                        {/* </Box> */}
                    </Box>

                </Grid>
                <Grid item xs={12} className={classes.mobile_layout}>
                    <Grid container justifyContent='center'

                    >
                        <Button variant="outlined"
                            style={{
                                borderRadius: 5,
                                padding: "10px 36px",
                                fontSize: "14px",
                                borderColor: "#00D05A",
                                minWidth: "150px"
                            }}
                        >
                            <Link href="#" underline="none" color="#00D05A">
                                Enter Election
                            </Link>
                        </Button>

                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default VotingUnderway