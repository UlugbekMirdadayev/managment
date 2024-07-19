import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name:"modal",
    initialState:false,
    reducers:{
        setModal(state,_){
            return !state
        }
    }
})

export const {setModal} = ModalSlice.actions;
export default ModalSlice.reducer