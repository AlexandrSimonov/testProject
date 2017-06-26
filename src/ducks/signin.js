const SIGNIN_REGUEST = "my-app/signin/SIGNIN_REGUEST";
const SIGNIN_SUCCESS = "my-app/signin/SIGNIN_SUCCESS";
const SIGNIN_FAIL = "my-app/signin/SIGNIN_FAIL";

// ----------------------------------------------------------------------------
// ACTION CREATORS
function auth(name, address, phone, email, password) {
  return dispatch => {
    dispatch({type: SIGNIN_REGUEST});

    setTimeout(
      () => {
        dispatch({type: SIGNIN_SUCCESS, payload: {token: "1234567890"}});
      },
      4000
    );
  };
}

export const actionCreators = {
  auth
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
    default:
      return state;
  }
}
