import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    themeMode: "light"
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setIsSideBarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
        setThemeMode: () => {
            state.themeMode = action.payload;
        }

    },
});

export const { setIsSideBarOpen, setThemeMode } =
    dashboardSlice.actions;

export default dashboardSlice.reducer;
