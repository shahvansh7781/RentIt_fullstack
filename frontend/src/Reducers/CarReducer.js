import {createReducer} from "@reduxjs/toolkit";

const initialState = {};

export const carReducer = createReducer(initialState,{
    allcarsRequest:(state)=>{
        state.loading = true;
    },
    allcarsSuccess:(state,action)=>{
        state.loading = false;
        state.cars = action.payload;
    },
    allcarsFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    }
})