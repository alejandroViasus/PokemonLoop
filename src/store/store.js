import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { Slice } from "./slice";

export default configureStore({
    reducer: {
        valueState:Slice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})