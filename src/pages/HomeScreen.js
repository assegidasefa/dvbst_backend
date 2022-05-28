import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core'
// import { lightBlue, lightGreen } from '@material-ui/core/colors';
import React from 'react'
// import Navbar from '../Navbar'
import Logs from '../logs';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    body: {
        padding: theme.spacing(4),
        backgroundColor: "#2F313D",
    },
    upper_part: {
        padding: theme.spacing(4)

    },
    lower_part: {
        display: "flex",
        backgroundColor: "#e5e5e"
    },
    inner_body: {

    },
    p_style: {
        textAlign: "center",
        padding: "0px 150px"
    },
    mybutton: {
        width: "25%",

    },

}));


function HomeScreen() {

    const classes = useStyles()
    return (
        <Grid container >

            <Grid container xs={12} direction="row" justifyContent="center" className={classes.body} >
                <Grid xs={12} sm={10} md={8} container >
                    <Grid item xs={6} direction='column' justifyContent='center'>
                        <Box>
                            <Typography style={{ fontSize: "54px", color: "white" }}>
                                <span style={{ color: "#00D05A", fontFamily: "Poppins", fontWeight: "SemiBold" }}>
                                    Modern and Secure
                                </span>
                                <br /> AAiT Student <br /> Council Election
                            </Typography>
                            <Box
                                component="button"
                                type="submit"
                                variant="contained"
                                color="white"
                                borderRadius="20px"
                                px={4}
                                py={1}
                                // borderColor="#00D05A"
                                bgcolor="#00D05A"
                            >
                                <Link to="/auth/Voting_underway">

                                    Start Voting
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} justifyContent='center' alignItems='center' direction='column'>
                        <Logs />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container xs={12} direction="row" justifyContent="center" className={classes.upper_part} >

                <Grid container xs={12} sm={10} md={8} justifyContent="space-around" >
                    <Grid xs={3}
                        container
                        item
                        direction="column"
                        alignItems='center'
                        justifyContent="space-around"
                        spacing={3}


                    >
                        <Avatar></Avatar>
                        <Typography variant='h6'>Lower</Typography>
                        <Typography variant='body2' align='center'>
                            Blockchain-based election system means your vote is anonymous
                            and the integrity of the election is maintained.
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container

                    >
                        <Grid item container direction='column' alignItems='center'>
                            <Avatar></Avatar>
                            <Typography variant='h6'>Lower</Typography>
                            <Typography variant='body2' align='center'>
                                Blockchain-based election system means your vote is anonymous
                                and the integrity of the election is maintained.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={3}

                    >
                        <Grid item container direction='column' alignItems='center' >
                            <Avatar></Avatar>
                            <Typography variant='h6' >Lower</Typography>
                            <Typography variant='body2' align='center'>
                                Blockchain-based election system means your vote is anonymous
                                and the integrity of the election is maintained.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default HomeScreen