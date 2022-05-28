import { Typography } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { Grid } from '@material-ui/core'

import React from 'react'

function candidateProfilePage() {
    return (
        <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh', minWidth: "80vw" }}
        >

            <Grid item xs={12} lg={3}>

                <Paper elevation={3} style={{

                }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        spacing={3}
                        alignItems="center"
                        minHeight="46vh"
                        boxShadow='2'
                    >
                        <Box item mb={2}>

                            <Avatar
                                sx={{ width: 100, height: 100 }}
                            />
                        </Box>
                        <Box item paddingX={2}>

                            <Typography>Lorem ipsum  sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={5} >
                <Paper elevation={3} style={{ minHeight: "5vh", minWidth: "40vw", marginBottom: "10px" }}>
                    <Grid item xs={12}>
                        <Grid container justifyContent='center'>

                            <Typography variant='h5'>Candidate Details</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation={3} style={{ padding: "10px" }}>

                    <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
                        <Grid item xs={3}>
                            <Typography>
                                First Name :
                            </Typography>
                        </Grid>
                        <Grid item xs={9} style={{ marginBottom: "10px" }}>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size="small" />
                        </Grid>

                        <Grid item xs={3}>
                            <Typography>
                                Last Name :
                            </Typography>
                        </Grid>
                        <Grid item xs={9} style={{ marginBottom: "10px" }}>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size="small" />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>
                                Grandfather Name :
                            </Typography>
                        </Grid>
                        <Grid item xs={9} style={{ marginBottom: "10px" }}>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size="small" />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>
                                Department :
                            </Typography>
                        </Grid>
                        <Grid item xs={9} style={{ marginBottom: "10px" }}>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size="small" />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>
                                Year :
                            </Typography>
                        </Grid>
                        <Grid item xs={9} style={{ marginBottom: "10px" }}>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size="small" />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>
                                Section :
                            </Typography>
                        </Grid>
                        <Grid item xs={9} style={{ marginBottom: "10px" }}>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size="small" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        </Grid>



    )
}

export default candidateProfilePage