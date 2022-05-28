import { Box, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputBase, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles, alpha } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
        maxWidth: 300,
    },
    root: {
        flexGrow: 1,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    body: {
        // padding: theme.spacing(4),
        // backgroundColor: "#2F313D",
        height: "100vh"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
function Idea() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        // <Container fixed>
        <Grid container alignItems='center' alignContent='center' justifyContent='center' style={{ borderStyle: "dashed", borderColor: "blue", height: '100vh' }}>
            <Grid container spacing={2} justifyContent="center" alignItems='center'>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={7}>
                        <Grid item xs={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-controlled-open-select-label">Sort By : Popularity</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={6}>

                            <Box display="flex" justifyContent="space-around">
                                <Box display="flex" alignItems="center">
                                    <Box mr={0.5}>
                                        <div className={classes.search}>
                                            <div className={classes.searchIcon}>
                                                <SearchIcon />
                                            </div>
                                            <InputBase
                                                placeholder="Search…"
                                                classes={{
                                                    root: classes.inputRoot,
                                                    input: classes.inputInput,
                                                }}
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </div>
                                        <div className={classes.grow} />
                                    </Box>

                                    {/* <Typography variant="h6">Google</Typography> */}
                                </Box>
                                {/* <Box display="flex" alignItems="center">
                                    <Box mr={0.5}>
                                        <Typography>hey</Typography>
                                        
                                    </Box>
                                    <Typography variant="h6">Twitter</Typography>
                                </Box> */}
                                {/* <Box display="flex" alignItems="center">
                                    <Box mr={0.5}>
                                        <Typography>hey</Typography>
                                        
                                    </Box>
                                    <Typography variant="h6">Facebock</Typography>
                                </Box> */}
                            </Box>
                            {/* <Grid container direction='row' justifyContent='flex-end' alignContent='center' style={{ borderStyle: "dashed", borderColor: "black" }}>
                                <Grid item>

                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon />
                                        </div>
                                        <InputBase
                                            placeholder="Search…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </div>
                                    <div className={classes.grow} />
                                </Grid>
                                <Grid item >

                                    <Button variant="outlined" color="secondary">
                                        Search
                                    </Button>
                                </Grid>
                            </Grid> */}

                        </Grid>
                    </Grid>
                    <Grid container direction='column-reverse' justifyContent='space-around'>
                        <Grid item xs={12}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography variant='subtitle1'>User03729173</Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lorem Ipsum Dolor1
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ligula platea euismod.
                                            Rutrum ut erat aenean faucibus orci posuere sed lectus. Massa urna nulla ornare vulputate ut dignissim.
                                            Ornare sapien sit at porttitor adipiscing imperdiet sed integer semper.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container justifyContent='space-between'>

                                        <Typography variant='subtitle1'>Posted 5 days ago</Typography>

                                        <Grid item >
                                            <Box display="flex" alignItems="center">

                                                <Button
                                                    aria-label="reduce"
                                                    onClick={() => {
                                                        setCount(Math.max(count - 1, 0));
                                                    }}
                                                >
                                                    <ArrowDropDown />
                                                </Button>

                                                <Typography>{count}</Typography>

                                                <Button
                                                    aria-label="increase"
                                                    onClick={() => {
                                                        setCount(count + 1);
                                                    }}
                                                >
                                                    <ArrowDropUp />

                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>

                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography variant='subtitle1'>User03729173</Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lorem Ipsum Dolor
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ligula platea euismod.
                                            Rutrum ut erat aenean faucibus orci posuere sed lectus. Massa urna nulla ornare vulputate ut dignissim.
                                            Ornare sapien sit at porttitor adipiscing imperdiet sed integer semper.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container justifyContent='space-between'>

                                        <Typography variant='subtitle1'>Posted 5 days ago</Typography>

                                        <Grid item >
                                            <Box display="flex" alignItems="center">

                                                <Button
                                                    aria-label="reduce"
                                                    onClick={() => {
                                                        setCount(Math.max(count - 1, 0));
                                                    }}
                                                >
                                                    <ArrowDropDown />
                                                </Button>

                                                <Typography>{count}</Typography>

                                                <Button
                                                    aria-label="increase"
                                                    onClick={() => {
                                                        setCount(count + 1);
                                                    }}
                                                >
                                                    <ArrowDropUp />

                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Grid container direction='column' justifyContent='space-evenly'  >

                        <Typography variant='h6'>Suggest an idea</Typography>
                        <Typography variant='subtitle1'>Write a paragraph of the idea you want to see impemented</Typography>
                        <TextField
                            id="standard-textarea"
                            // label="Multiline Placeholder"
                            placeholder="Write the title here..."
                            multiline
                            fullWidth
                        />
                        <TextField
                            id="standard-textarea"
                            // label="Multiline Placeholder"
                            placeholder="Write your suggestions here..."
                            multiline
                            fullWidth
                            rows={4}
                        />
                        <Button color="#00D05A" variant="contained">Post</Button>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
        // { </Container> 
    )
}

export default Idea