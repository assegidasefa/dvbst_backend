import { Grid, Typography, makeStyles, Avatar, Container, Box } from '@material-ui/core'
import React from 'react'
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    my_typogrphy: {
        color: "white",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    table: {
        minWidth: 600,
    },
    my_background: {
        backgroundColor: "#2F313D",
        height: "60vh"
    },
    grid: {
        marginTop: "-60px"
    },
    small: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },

}));

function createData(Ranks, Views, Full_name, Other_info) {
    return { Ranks, Views, Full_name, Other_info }
}

const rows = [
    createData(1, 145, "Abebe Kebede", "other information"),
    createData(1, 145, "Abebe Kebede", "other information"),
    createData(1, 145, "Abebe Kebede", "other information"),
    createData(1, 145, "Abebe Kebede", "other information"),
]

function Result() {

    const classes = useStyles();
    const [section, setSection] = React.useState('');

    const handleChange = (event) => {
        setSection(event.target.value);
    };
    return (


        <Grid container >
            <Grid container justifyContent='center' className={classes.my_background} >
                <Grid container xs={9} alignItems='center' direction='row'>
                    <Grid item xs={4} sm={12}>

                        <Typography className={classes.my_typogrphy} variant='h5' >
                            Election Results
                        </Typography>
                        <Typography variant='subtitle2' className={classes.my_typogrphy}>Section</Typography>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                            style={{background:"white"}}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={section}
                                onChange={handleChange}
                                label="Section"
                            >
                                <MenuItem value={10}>Section 1</MenuItem>
                                <MenuItem value={20}>Section 2</MenuItem>
                                <MenuItem value={30}> Section 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={11} md={8}>

                    <Grid container spacing={1} justifyContent='space-around' alignItems='center' >
                        <Box display="flex" flexDirection="column" alignItems='center' spacing={3}>
                            <Box display="flex" alignItems="flex-end" mb={0.5}>
                                <Typography className={classes.my_typogrphy} variant='h3'>2</Typography>
                                <Typography className={classes.my_typogrphy} variant='h6'>nd</Typography>
                            </Box >
                            <Avatar className={classes.small}></Avatar>
                            <Box mt={0.7}>

                                <Typography className={classes.my_typogrphy}>Abebe Kebede</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={0.5}>
                                <Typography className={classes.my_typogrphy} variant='h3'>150</Typography>
                                <Typography className={classes.my_typogrphy} variant='h6'>vote</Typography>
                            </Box >

                        </Box>

                        <Box display="flex" flexDirection="column" alignItems='center' spacing={3}>
                            <Box display="flex" alignItems="flex-end" mb={0.5}>
                                <Typography className={classes.my_typogrphy} variant='h3'>1</Typography>
                                <Typography className={classes.my_typogrphy} variant='h6'>st</Typography>
                            </Box >
                            <Avatar className={classes.large}></Avatar>
                            <Box mt={0.7}>

                                <Typography className={classes.my_typogrphy}>Abebe Kebede</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={4.5}>
                                <Typography className={classes.my_typogrphy} variant='h3'>150</Typography>
                                <Typography className={classes.my_typogrphy} variant='h6'>vote</Typography>
                            </Box >
                        </Box>

                        <Box display="flex" flexDirection="column" alignItems='center' spacing={3}>
                            <Box display="flex" alignItems="center" mb={0.5}>
                                <Typography className={classes.my_typogrphy} variant='h3'>3</Typography>
                                <Typography className={classes.my_typogrphy} variant='h6'>rd</Typography>
                            </Box >
                            <Avatar className={classes.small}></Avatar>
                            <Box mt={0.7}>

                                <Typography className={classes.my_typogrphy}>Abebe Kebede</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={0.5}>
                                <Typography className={classes.my_typogrphy} variant='h3'>150</Typography>
                                <Typography className={classes.my_typogrphy} variant='h6'>vote</Typography>
                            </Box >
                        </Box>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>

                <Grid container justifyContent='center' alignItems='center' gridTemplateAreas="overlap">
                    <Grid item xs={12} sm={12} md={6} justifyContent="center" >
                        <Grid item className={classes.grid}>

                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Ranks </TableCell>
                                            <TableCell align="right">Views</TableCell>
                                            <TableCell align="right">Full Name</TableCell>
                                            <TableCell align="right">Other Info</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.Ranks}>
                                                <TableCell component="th" scope="row">
                                                    {row.Ranks}
                                                </TableCell>
                                                <TableCell align="right">{row.Views}</TableCell>
                                                <TableCell align="right">{row.Full_name}</TableCell>
                                                <TableCell align="right">{row.Other_info}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Result