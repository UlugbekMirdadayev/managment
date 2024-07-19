import { createSlice } from "@reduxjs/toolkit";


const reportSlice = createSlice({
    name:"report",
    initialState:[],
    reducers:{
        setReport(_,{payload}){
          return payload
        }
    }
})


export const {setReport} = reportSlice.actions;
export default reportSlice.reducer;