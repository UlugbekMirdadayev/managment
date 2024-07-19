import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name:"loader",
    initialState:false,
    reducers:{
        setLoader(state,{payload}){
            return state = payload
        }
    }
})

export const {setLoader} = loaderSlice.actions;
export default loaderSlice.reducer