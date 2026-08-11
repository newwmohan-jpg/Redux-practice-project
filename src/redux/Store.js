import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './SearchSlice'
export const Store = configureStore(
    { reducer:{
        search : searchReducer
    }

    }
);