import apiLocalStorage from "../lib/apiLocalStorage";

const SIGNIN_REGUEST = "my-app/signin/SIGNIN_REGUEST";
const SIGNIN_SUCCESS = "my-app/signin/SIGNIN_SUCCESS";
const SIGNIN_FAIL = "my-app/signin/SIGNIN_FAIL";
const SIGNIN_LOGOUT = "my-app/signin/SIGNIN_LOGOUT";
const SIGNUP_REGUEST = "my-app/signin/SIGNUP_REGUEST";
const SIGNUP_SUCCESS = "my-app/signin/SIGNUP_SUCCESS";
const SIGNUP_FAIL = "my-app/signin/SIGNUP_FAIL";

// ----------------------------------------------------------------------------
// ACTION CREATORS
function auth(login, passoword) {
  return dispatch => {
    dispatch({type: SIGNIN_REGUEST});

    setTimeout(
      () => {
        const token = "1234567890";
        apiLocalStorage.setToken(token);
        dispatch({type: SIGNIN_SUCCESS, payload: {token}});
      },
      200
    );
  };
}

function reg(name, address, phone, email, password) {
  return dispatch => {
    dispatch({type: SIGNUP_REGUEST});

    setTimeout(
      () => {
        const token = "1234567890";
        apiLocalStorage.setToken(token);
        dispatch({type: SIGNIN_SUCCESS, payload: {token}});
      },
      100
    );
  };
}

function logout() {
  return dispatch => {
    dispatch({type: SIGNIN_LOGOUT});
    apiLocalStorage.setToken(undefined);
  };
}

function initUser() {
  return dispatch => {
    const token = apiLocalStorage.getToken();
    if (token) {
      dispatch({type: SIGNIN_SUCCESS, payload: {token}});
    }
  };
}

export const actionCreators = {
  auth,
  initUser,
  logout,
  reg
};

// ----------------------------------------------------------------------------
// REDUCER
const initState = {
  signin: {
    fetching: false,
    error: ""
  },
  signup: {
    fetching: false,
    erorr: ""
  },
  token: null
};

export function reducer(state = initState, action) {
  switch (action.type) {
    case SIGNIN_REGUEST:
      return {...state, signin: {fetching: true}};
    case SIGNIN_SUCCESS:
      return {...state, signin: {fetching: false}, token: action.payload};
    case SIGNIN_FAIL:
      return {...state, signin: {fetching: false, error: action.payload}};
    case SIGNIN_LOGOUT:
      return {...state, token: null};
    case SIGNUP_REGUEST:
      return {...state, signup: {fetching: true}};
    case SIGNUP_SUCCESS:
      return {...state, signup: {fetching: false}};
    case SIGNUP_FAIL:
      return {...state, signup: {fetching: false, error: action.payload}};
    default:
      return state;
  }
}
