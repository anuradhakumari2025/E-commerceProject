import axios from "../../api/axiosconfig";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/users/login", {
      email: user.email,
      password: user.password,
    });
    console.log("Login response:", data); // This should show user inside data.user
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));

      // Dispatch to update Redux immediately
      dispatch(loadUser(data.user));
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser(user));
    console.log("logout!!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const userString = localStorage.getItem("user");

    if (userString) {
      const user = JSON.parse(userString);
      dispatch(loadUser(user));
    } else {
      console.log("Login to Access is denied");
    }
  } catch (error) {
    console.log("Error parsing user from localStorage:", error);
  }
};


export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users/register", user);
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateProfile = (updatedUser) => async (dispatch, getState) => {
  try {
    const { _id } = updatedUser;
    const { data } = await axios.patch("/users/" + _id, updatedUser);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/users/" + id);
    dispatch(asyncLogoutUser());
    console.log("User Account Deleted Successfully!!");
  } catch (error) {
    console.log(error);
  }
};
