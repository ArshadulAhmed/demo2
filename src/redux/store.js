import { configureStore, combineReducers } from "@reduxjs/toolkit";
import populationSlice from "./reducers/populationSlice";


const rootReuder = combineReducers({
    population: populationSlice
})

export const store = configureStore({
    reducer: rootReuder
})