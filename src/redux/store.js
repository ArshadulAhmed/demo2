import { configureStore, combineReducers } from "@reduxjs/toolkit";
import populationSlice from "./reducers/populationSlice";
import currencySlice from "./reducers/currencySlice";


const rootReuder = combineReducers({
    population: populationSlice,
    currency: currencySlice,
})

export const store = configureStore({
    reducer: rootReuder
})