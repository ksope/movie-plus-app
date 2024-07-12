import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bannerData: [],
    imageURL : ""

}
export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.barrierData = action.payload;
        },
        setImageURL : (state,action)=>{
            state.imageURL = action.payload
        }
    },
});

export const { setBannerData, setImageURL } = movieSlice.actions;

export default movieSlice.reducers;