import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../utils/localStorage";

const initialState = {
  logIn: getItem('logIn') || {},
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
