import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loading = true;
  },

  loginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },

  loginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  logoutRequest: (state) => {
    state.loading = true;
  },
  logoutSuccess:(state)=>{
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  logoutFailure:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  }
});
