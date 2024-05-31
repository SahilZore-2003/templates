import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currSite: null,
  content: {},
  currTheme: "",
  currFont: "",
  currStyles: {}
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrSite: (state, action) => {
      state.currSite = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setCurrTheme: (state, action) => {
      state.currTheme = action.payload;
    },
    setCurrFont: (state, action) => {
      state.currFont = action.payload;
    },
    setCurrStyles: (state, action) => {
      state.currStyles = action.payload;
    },
  },
});

export const { setCurrSite, setContent, setCurrTheme, setCurrFont, setCurrStyles } =
  appSlice.actions;

export default appSlice.reducer;
