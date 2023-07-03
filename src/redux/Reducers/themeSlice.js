import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    changeThemeSetting: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeThemeSetting } = themeSlice.actions;

export default themeSlice.reducer;
