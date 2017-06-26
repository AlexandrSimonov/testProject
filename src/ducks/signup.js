const SIGNUP_REGUEST = "my-app/signin/SIGNUP_REGUEST";
const SIGNUP_SUCCESS = "my-app/signin/SIGNUP_SUCCESS";
const SIGNUP_FAIL = "my-app/signin/SIGNUP_FAIL";

// ----------------------------------------------------------------------------
// ACTION CREATORS
function registration(name, address, phone, email, password) {
  return dispatch => {
    dispatch({type: SIGNUP_REGUEST});

    /* Запрос на сервер
    axios
      .post(
        "http://appwash.equiporojo.cl/api/signup",
        {
          name,
          address,
          phone,
          email,
          password
        }
      )
      .then(data => {
        dispatch({type: SIGNUP_SUCCESS, payload: data});
      })
      .catch(err => {
        dispatch({type: SIGNUP_FAIL, payload: err});
      });
      */

    setTimeout(
      () => {
        dispatch({type: SIGNUP_SUCCESS, payload: {token: "1234567890"}});
      },
      4000
    );
  };
}

export const actionCreators = {
  registration
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
    case SIGNUP_REGUEST:
      return {...state, fetching: true};
    case SIGNUP_SUCCESS:
      return {...state, fetching: false, user: action.payload};
    case SIGNUP_FAIL:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}
