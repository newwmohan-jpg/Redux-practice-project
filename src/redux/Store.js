import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './SearchSlice'
import collectionReducer from './CollectionSlice'
export const Store = configureStore(
    { reducer:{
        search : searchReducer,
        collection : collectionReducer
    }

    }
);