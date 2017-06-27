const SERVICES_REGUEST = "my-app/SERVICES/SERVICES_REGUEST";
const SERVICES_SUCCESS = "my-app/SERVICES/SERVICES_SUCCESS";
const SERVICES_FAIL = "my-app/SERVICES/SERVICES_FAIL";

// ----------------------------------------------------------------------------
// ACTION CREATORS
function getList() {
  return dispatch => {
    dispatch({type: SERVICES_REGUEST});

    setTimeout(
      () => {
        const services = [
          {
            id: 0,
            name: "name 1"
          },
          {
            id: 1,
            name: "name 2"
          },
          {
            id: 2,
            name: "name 3"
          }
        ];

        dispatch({type: SERVICES_SUCCESS, payload: {services}});
      },
      2000
    );
  };
}

export const actionCreators = {
  getList
};

// ----------------------------------------------------------------------------
// REDUCER
const initState = {
  fetching: false,
  error: "",
  services: null
};

export function reducer(state = initState, action) {
  switch (action.type) {
    case SERVICES_REGUEST:
      return {...state, fetching: true};
    case SERVICES_SUCCESS:
      return {...state, fetching: false, services: action.payload.services};
    case SERVICES_FAIL:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}
