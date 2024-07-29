import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
    name:"update",
    initialState:{user:[],task:[]},
    reducers:{
        updateTask(_,{payload}){
            return payload
        },
        updateUser(_,{payload}){
            return payload
        },
        clearUpdate(state,{payload}){
           state = payload
        }
    }
})


export const {updateTask,updateUser,clearUpdate} = updateSlice.actions;
export default updateSlice.reducer