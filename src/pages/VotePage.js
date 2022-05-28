import { Avatar, Box, Button, Card, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CandidatesList from '../components/candidatesList'
import Countdown from '../components/countdown';
import { getCandidates } from '../features/candidatesSlice';


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


function VotePage() {

    // const [timerDays, setTimerDays] = useState('00')
    // const [timerHours, setTimerHours] = useState('00')
    // const [timerMinutes, setTimerMinutes] = useState('00')
    // const [timerSeconds, setTimerSeconds] = useState('00')

    // let interval = useRef()

    // const startTimer = () => {
    //     const countdownDate = new Date('Apr 24 , 2022 00:00:00').getTime()

    //     interval = setInterval(() => {
    //         const now = new Date().getTime()
    //         const distance = countdownDate - now

    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    //         const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    //         const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
    //         const seconds = Math.floor((distance % (1000 * 60) / (1000)))

    //         if (distance < 0) {
    //             clearInterval(interval.current)
    //         } else {
    //             setTimerDays(days)
    //             setTimerHours(hours)
    //             setTimerMinutes(minutes)
    //             setTimerSeconds(seconds)
    //         }

    //     }, 1000)
    // }

    // useEffect(() => {
    //     startTimer()
    //     return () => {
    //         clearInterval(interval.current)
    //     }
    // })
    const classes = useStyles()
    const dispatch = useDispatch()
    const candidatesState = useSelector((state) => state.candidatesState)

    useEffect(() => {
        if (candidatesState.getCandidatesStatus === '') {
            dispatch(getCandidates())
        }
    }, [dispatch, candidatesState.getCandidatesStatus])
    return (
        <div >
            <Grid
                container
                alignItems='center'
                justifyContent='center'
                spacing={5}
                style={{ height: '100vh' }}
            >
                <Grid item xs={12} className={classes.body}>


                    <Grid container justifyContent='center'  >

                        <Grid item xs={9} >
                            <Grid container direction='column' justifyContent='center'>
                                {/* <Typography variant='h4' className={classes.my_typogrphy}>Time Remaining </Typography> */}
                                {/* <Typography variant='h4' className={classes.my_typogrphy}>{timerDays} : {timerHours} : {timerMinutes} : {timerSeconds}</Typography> */}
                                <Countdown />
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={11} md={9} style={{ height: '75vh' }}>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='center'
                        spacing={5}
                    >
                        <Grid item xs={12}>
                            {
                                candidatesState.getCandidatesStatus === "pending" && (
                                    <Typography>Loading ....</Typography>
                                )
                            },

                            {
                                candidatesState.getCandidatesStatus === "failed" && (
                                    <Typography>failed</Typography>
                                )
                            }

                            {
                                candidatesState.getCandidatesStatus === "success" && (
                                    <>
                                        {
                                            candidatesState.candidates.length == 0 && (
                                                <Typography>Nothing</Typography>
                                            )
                                        }
                                        {candidatesState.candidates.map((candidates) => (
                                            
                                            <CandidatesList
                                                name={candidates.name}
                                                fname={candidates.fname}
                                                dept={candidates.dept}
                                                sections={candidates.section}
                                            />
                                        ))}
                                    </>
                                )
                            }

                        </Grid>


                    </Grid>

                </Grid>

            </Grid>
        </div>
    )
}

export default VotePage