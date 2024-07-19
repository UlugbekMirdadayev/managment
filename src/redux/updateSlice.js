import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
    name:"update",
    initialState:localStorage.getItem("update") || {user:[],task:[]},
    reducers:{
        updateTask(_,{payload}){
            localStorage.setItem("update_task",JSON.stringify(payload))
            return payload
        }
    }
})


export const {updateTask} = updateSlice.actions;
export default updateSlice.reducer