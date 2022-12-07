import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  error: null,
};

export const adminReducer = createReducer(initialState, {
  getAllUsersRequest: (state) => {
    state.loading = true;
  },
  getAllUsersSuccess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  getAllUsersFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  getAllBookingsRequest: (state) => {
    state.loading = true;
  },
  getAllBookingsSuccess: (state, action) => {
    state.loading = false;
    state.bookings = action.payload;
  },
  getAllBookingsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  getAllCarsAdminRequest:(state)=>{
    state.loading = true;
  },
  getAllCarsAdminSuccess:(state,action)=>{
    state.loading = false;
    state.cars = action.payload;
  },
  getAllCarsAdminFailure:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
  }
});
