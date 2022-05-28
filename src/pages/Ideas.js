import { alpha, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import IdeaDetails from '../components/IdeaDetails'
import SearchBar from '../components/searchBar';
import FilterComponent from '../components/filterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getIdeas } from '../features/idasSlice';
import Suggestion from '../components/suggestion';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        maxWidth: 300,
    },
    root: {
        flexGrow: 1,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    body: {

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

function Ideas() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const ideasState = useSelector((state) => state.ideasState)

    useEffect(() => {
        if (ideasState.getIdeasStatus === '') {
            dispatch(getIdeas())
        }
    }, [dispatch, ideasState.getIdeasStatus])



    return (

        <Grid container alignItems='center' justifyContent='center' style={{ height: '100vh' }}>

            <Grid
                container
                justifyContent="space-around"
                alignItems="center"
            >


                <Grid item xs={12} sm={8} md={7} lg={6} spacing={3} >
                    <Grid container spacing={4} justifyContent="center">
                        {
                            ideasState.getIdeasStatus === "pending" && (
                                <Typography>Loading ....</Typography>
                            )
                        },

                        {
                            ideasState.getIdeasStatus === "failed" && (
                                <Typography>failed</Typography>
                            )
                        }

                        {ideasState.getIdeasStatus === "success" && (
                            <>
                                <Grid item xs={12} alignItems='flex-end'>
                                    <Grid container alignItems='center'>


                                        <FilterComponent />

                                        <SearchBar />
                                        {ideasState.ideas.length == 0 && (
                                            <Typography>noting</Typography>
                                        )}
                                    </Grid>

                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction='column' justifyContent='space-around' alignItems='center' spacing={3}
                                    >

                                        {ideasState.ideas.map((idea) => (
                                            <IdeaDetails
                                                id={idea._id}
                                                userName={idea.username}
                                                title={idea.title}
                                                description={idea.description}
                                                likeCount={idea.likeCount}
                                                liked={idea.likedUser}

                                            />
                                        ))}
                                    </Grid>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} lg={3} md={4} >
                    <Suggestion />
                </Grid>


            </Grid>
        </Grid>
    )
}

export default Ideas