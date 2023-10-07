import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  sidebarOpen: true,
};

const appSlice = createSlice({
  name: "App Slice",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});
export const { toggleSidebar } = appSlice.actions;
export default appSlice.reducer;
