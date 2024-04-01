import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios';


const POST_URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'


export const popoulationData = createAsyncThunk("getPopulation", async (data) => {
  try {
    const response = await axios.get(POST_URL, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});



export const populationSlice = createSlice({
 name: 'population',
 initialState: {
  data:[],
  isLoading: false,
  error: null,

 },

extraReducers: (builder) => {
  builder.addCase(popoulationData.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(popoulationData.fulfilled, (state, action) => {
    state.isLoading = false;
    state.data = action?.payload?.data || [];
  });
  builder.addCase(popoulationData.rejected, (state, action) => {
    console.log("Error", action.payload);
  });
}

})
export default populationSlice.reducer;