import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { alpha } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';



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

function SearchBar() {

    const classes = useStyles();
    return (
        <Grid item xs={12} md={4} lg={4} >
            <Box display="flex" justifyContent="center">
                <Box display="flex" alignItems="center">
                    <Box mr={0.01} pl={4}>
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

                </Box>
                <Button variant="outlined"
                    style={{
                        borderRadius: 5,
                        color: "#00D05A",
                        padding: "10px 36px",
                        fontSize: "14px"
                    }}
                >
                    Search
                </Button>
            </Box>

        </Grid>
    )
}

export default SearchBar