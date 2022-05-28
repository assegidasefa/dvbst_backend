import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addIdeas } from "../features/idasSlice"

function Suggestion() {

    const [description, setDescription] = useState();
    const [title, setTitle] = useState();

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (description && title) {
            dispatch(addIdeas({
                username: "test_user",
                title,
                description
            }))
        }
        
    }

    return (
        <Grid container direction='column' justifyContent='center' spacing={1}>
            <Grid item xs={12} >

                <Typography variant='h6'>Suggest an idea</Typography>
            </Grid>
            <Grid item xs={12} >

                <Typography variant="body2">Write a paragraph of the idea you want to see impemented</Typography>
            </Grid>

            <Grid item xs={12} >

                <TextField
                    id="standard-textarea"
                    // label="Multiline Placeholder"
                    placeholder="Write the title here..."
                    multiline
                    fullWidth
                    style={{ borderStyle: "dashed", borderColor: "black" }}

                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                />
            </Grid>

            <Grid item xs={12}>

                <TextField
                    id="standard-textarea"
                    // label="Multiline Placeholder"
                    placeholder="Write your suggestions here..."
                    multiline
                    fullWidth
                    rows={10}

                    value={description}
                    onChange={(e) => setDescription(e.target.value)}

                />
            </Grid>
            <Grid item xs={12} >

                <Button fullWidth variant="contained"
                    style={{
                        borderRadius: 5,
                        color: "#fff",
                        backgroundColor: "#00D05A",
                        padding: "18px 36px",
                        fontSize: "18px"
                    }}
                    onClick={onSubmit}
                >Post</Button>
            </Grid>
            {/* <Typography>side</Typography> */}
        </Grid>
    )
}

export default Suggestion