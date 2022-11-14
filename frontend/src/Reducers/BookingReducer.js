import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    error:null
};

export const bookingReducer = createReducer(initialState,{
    newbookingRequest:(state)=>{
        state.loading = true;
    },
    newbookingSuccess:(state,action)=>{
        state.loading = false;
        state.bookingDetails = action.payload;
    },
    newbookingFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearError:(state)=>{
        state.error = null;
    }
});
