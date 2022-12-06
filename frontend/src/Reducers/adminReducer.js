import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    users:null,
    error:null
};

export const adminReducer = createReducer(initialState,{
getAllUsersRequest:(state)=>{
state.loading=true;
},
getAllUsersSuccess:(state,action)=>{
    state.loading = false;
    state.users = action.payload;
},
getAllUsersFailure:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
}
})