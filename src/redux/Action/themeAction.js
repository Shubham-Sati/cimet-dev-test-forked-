import { changeThemeSetting } from "../Reducers/themeSlice";

// Change the Theme of Application
export const changeTheme = (url) => async (dispatch) => {
  dispatch(changeThemeSetting());
};
