import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'



const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    body: {
        padding: theme.spacing(4),
        backgroundColor: "#2F313D",
        minHeight: "25vh",
    },
    my_typogrphy: {
        color: "white",
    }

}));


function Countdown() {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    const classes = useStyles()
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
    return (
        <Grid container direction='column' justifyContent='center' className={classes.body}>
            <Typography variant='h4' className={classes.my_typogrphy}>Time Remaining </Typography>
            <Typography variant='h4' className={classes.my_typogrphy}>{timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}</Typography>
        </Grid>
    )
}

export default Countdown