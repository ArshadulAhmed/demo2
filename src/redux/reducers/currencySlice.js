import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios';


const POST_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'


export const currencyData = createAsyncThunk("getCurrency", async (data) => {
  try {
    const response = await axios.get(POST_URL, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});



export const currencySlice = createSlice({
 name: 'population',
 initialState: {
  data:{},
  isLoading: false,
  error: null,

 },

extraReducers: (builder) => {
  builder.addCase(currencyData.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(currencyData.fulfilled, (state, action) => {
    state.isLoading = false;
    state.data = action?.payload?.bpi || {};
  });
  builder.addCase(currencyData.rejected, (state, action) => {
    console.log("Error", action.payload);
  });
}

})
export default currencySlice.reducer;