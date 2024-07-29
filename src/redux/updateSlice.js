import { createSlice } from "@reduxjs/toolkit";

let initialState ={user:[],task:[]}

const updateSlice = createSlice({
    name:"update",
    initialState,
    reducers:{
        updateTask(_,{payload}){
            return payload
        },
        updateUser(_,{payload}){
            return payload
        },
        clearUpdate(_,actions){
          return initialState
        }
    }
})


export const {updateTask,updateUser,clearUpdate} = updateSlice.actions;
export default updateSlice.reducer