import { configureStore, combineReducers } from "@reduxjs/toolkit";
import populationSlice from "./reducers/populationSlice";
import currencySlice from "./reducers/currencySlice";
import commonSlice from "./reducers/commonSlice";


const rootReuder = combineReducers({
    population: populationSlice,
    currency: currencySlice,
    commonSlice: commonSlice
})

export const store = configureStore({
    reducer: rootReuder
})