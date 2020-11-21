import axios from "axios";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAILURE,
  ADMIN_LOGOUT,
} from "./actionTypes";

export const adminLogoutRequest = () => ({
  type: ADMIN_LOGOUT
});

export const adminLogout = (payload) => (dispatch) => {
  dispatch(adminLogoutRequest());
};

export const adminLoginRequest = () => ({
  type: ADMIN_LOGIN_REQUEST
});

export const adminLoginSuccess = (token) => ({
  type: ADMIN_LOGIN_SUCCESS,
  payload: {
    token
  }
});

export const adminLoginFailure = () => ({
  type: ADMIN_LOGIN_FAILURE
});

export const adminLogin = (payload) => (dispatch) => {
  dispatch(adminLoginRequest());
  axios
    .post("http://localhost:5000/admin/login", {
      email: payload.email,
      password: payload.password
    })
    .then((res) => {
      dispatch(adminLoginSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(adminLoginFailure());
    });
};

export const adminRegisterRequest = () => ({
  type: ADMIN_REGISTER_REQUEST
});

export const adminRegisterSuccess = (token) => ({
  type: ADMIN_REGISTER_SUCCESS,
  payload: {
    token
  }
});

export const adminRegisterFailure = () => ({
  type: ADMIN_REGISTER_FAILURE
});

export const adminRegister = (payload) => (dispatch) => {
  dispatch(adminRegisterRequest());
  axios
    .post("http://localhost:5000/admin/register", {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    })
    .then((res) => {
      dispatch(adminRegisterSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(adminRegisterFailure());
    });
};