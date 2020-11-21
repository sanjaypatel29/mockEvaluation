import {
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAILURE,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGOUT
} from "../actionTypes";


export const initState = {
  regError: "",
  regSuccess: "",
  isLoading: false,
  loginErr: "",
  isAuth: false,
  ADMINData: [],
  isError: false,
};
export default (state = initState, { type, payload }) => {
  switch (type) {
    case ADMIN_REGISTER_REQUEST:
      return {
        ...state,
        regError: ""
      };
    case ADMIN_REGISTER_SUCCESS:
      return {
        ...state,
        regSuccess: "Registration Success"
      };
    case ADMIN_REGISTER_FAILURE:
      return {
        ...state,
        regError: "something went wrong"
      };
    case ADMIN_LOGIN_REQUEST:
      console.log(state);
      return {
        ...state,
        loginErr: "",
        isLoading: true
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
      };
    case ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginErr: "something went wrong"
      };
    case ADMIN_LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
