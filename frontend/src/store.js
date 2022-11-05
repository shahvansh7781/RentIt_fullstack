import {configureStore} from "@reduxjs/toolkit";
import { carReducer } from "./Reducers/CarReducer";
import { userReducer } from "./Reducers/UserReducer";

const store = configureStore({
    reducer:{
        user:userReducer,
        cars:carReducer
    }
});

export default store;