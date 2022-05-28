import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { alpha } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ArrowDropUp } from '@material-ui/icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Print } from '@material-ui/icons';
import { ArrowDropDown } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import { voteIdea } from '../features/idasSlice';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        maxWidth: 300,
    },
    root: {
        flexGrow: 1,
        width: '50vw',
        [theme.breakpoints.down('md')]: {
            width: '70vw',

        },
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


function IdeaDetails(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    // const [age, setAge] = React.useState('');
    // const [open, setOpen] = React.useState(false);
    // const [count, setCount] = React.useState(1);
    // const [state, setState] = React.useState({
    //     age: '',
    //     name: 'hai',
    // });


    const clickHandler = () => {
        console.log("clicek")
        dispatch(voteIdea(props.id))

    }


    function showLikedColor(isLiked) {
        if (isLiked) {
            return "red"
        }
        else { return "gray" }
    }

    // handleLoginClick() {
    //     this.setState({ isLoggedIn: true });
    // }

    // handleLogoutClick() {
    //     this.setState({ isLoggedIn: false });
    // }
    return (
        <Grid item xs={12} >
            <Grid container direction='column' alignContent='space-between' alignItems='center' spacing={3} >
                {/* <Grid item xs={12}> */}
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant='subtitle1'>{props.userName}</Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ligula platea euismod.
                                    Rutrum ut erat aenean faucibus orci posuere sed lectus. Massa urna nulla ornare vulputate ut dignissim.
                                    Ornare sapien sit at porttitor adipiscing imperdiet sed integer semper. */}
                                {props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Grid container justifyContent='flex-end'>
                            <ArrowDropUp onClick={clickHandler} style={{ color: props.liked ? "red" : "gray" }} />
                            <Typography variant='subtitle1'>{props.likeCount}</Typography>

                            <Grid item={true} justifyContent="flex-end">
                                <Box display="flex" justifyItems="">

                                    {/* <Box>
                                        {props.liked ? <ArrowDropDown onClick={clickHandler} /> : <ArrowDropUp onClick={clickHandler} />}

                                    </Box> */}
                                    {/* <ArrowDropDownIcon onClick={clickHandler} /> */}
                                    <ArrowDropDown onClick={
                                        props.liked ?
                                            clickHandler() : console.log("asdf")
                                    }

                                    />

                                    <Box>

                                        <Typography>{props.voteCount}</Typography>
                                    </Box>


                                </Box>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
                {/* <Typography>Card</Typography> */}
                {/* </Grid> */}

            </Grid>
        </Grid>
    )
}


export default IdeaDetails