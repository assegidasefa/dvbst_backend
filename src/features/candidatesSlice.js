import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

// const baseURL = "https://dvbst.herokuapp.com"
const baseURL = "http://localhost:8080"

const initialState = {

    getCandidatesStatus: "",
    getCandidatesError: "",

}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



export const getCandidates = createAsyncThunk("candidates/getCandidates", async (id = null, {
    rejectWithValue }) => {
    try {
        await timeout(1000)
        const response = await axios.get(baseURL + "/candidates")
        console.log("response data ----", response)
        return response.data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})



const candidatesSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {},
    extraReducers: {


        [getCandidates.pending]: (state, action) => {
            return {
                ...state,
                getCandidatesStatus: "pending",
            }
        },
        [getCandidates.fulfilled]: (state, action) => {
            return {
                ...state,
                candidates: action.payload,
                getCandidatesStatus: "success"
            }
        },
        [getCandidates.rejected]: (state, action) => {
            return {
                ...state,
                getCandidatesStatus: "failed",
                getCandidatesError: action.payload,
            }
        },



    }
})



export default candidatesSlice.reducer;

