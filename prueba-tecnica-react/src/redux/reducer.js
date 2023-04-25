import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logIn: {},
};


export const slice = createSlice({
  name: "store",    
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.logIn = action.payload
      console.log(state.logIn);
    }
  },
});

export const { increment, decrement, incrementByAmount, setLogIn } = slice.actions;
export default slice.reducer;
