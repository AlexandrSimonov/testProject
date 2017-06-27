import apiLocalStorage from "../lib/apiLocalStorage";

const SIGNIN_REGUEST = "my-app/signin/SIGNIN_REGUEST";
const SIGNIN_SUCCESS = "my-app/signin/SIGNIN_SUCCESS";
const SIGNIN_FAIL = "my-app/signin/SIGNIN_FAIL";
const SIGNIN_LOGOUT = "my-app/signin/SIGNIN_LOGOUT";

export const constans = {
  SIGNIN_SUCCESS
};

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
  logout
};

// ----------------------------------------------------------------------------
// REDUCER
const initState = {
  fetching: false,
  error: "",
  user: null
};

export function reducer(state = initState, action) {
  switch (action.type) {
    case SIGNIN_REGUEST:
      return {...state, fetching: true};
    case SIGNIN_SUCCESS:
      return {...state, fetching: false, user: action.payload};
    case SIGNIN_FAIL:
      return {...state, fetching: false, error: action.payload};
    case SIGNIN_LOGOUT:
      return {...state, user: null};
    default:
      return state;
  }
}
