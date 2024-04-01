import { createSlice } from '@reduxjs/toolkit';



const initalValue = {
  isOpen: true,
};

export const commonSlice = createSlice({
  name: 'navStatus',
  initialState: initalValue,
  reducers: {
    handleMenuToggle: (state, action) => {
      state.isOpen = !action.payload
    },
  },
});

export const { handleMenuToggle } = commonSlice.actions;
export default commonSlice.reducer;