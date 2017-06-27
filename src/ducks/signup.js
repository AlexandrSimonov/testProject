import {constans} from "./signin";
import apiLocalStorage from "../lib/apiLocalStorage";

const SIGNUP_REGUEST = "my-app/signin/SIGNUP_REGUEST";
const SIGNUP_SUCCESS = "my-app/signin/SIGNUP_SUCCESS";
const SIGNUP_FAIL = "my-app/signin/SIGNUP_FAIL";

// ----------------------------------------------------------------------------
// ACTION CREATORS
function reg(name, address, phone, email, password) {
  return dispatch => {
    dispatch({type: SIGNUP_REGUEST});

    setTimeout(
      () => {
        const token = "1234567890";
        apiLocalStorage.setToken(token);

        dispatch({type: SIGNUP_SUCCESS});
        dispatch({type: constans.SIGNIN_SUCCESS, payload: {token}});
      },
      100
    );
  };
}

export const actionCreators = {
  reg
};

// ----------------------------------------------------------------------------
// REDUCER
const initState = {
  fetching: false,
  error: ""
};

export function reducer(state = initState, action) {
  switch (action.type) {
    case SIGNUP_REGUEST:
      return {...state, fetching: true};
    case SIGNUP_SUCCESS:
      return {...state, fetching: false};
    case SIGNUP_FAIL:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}
