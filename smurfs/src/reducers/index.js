import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS
} from "../actions";


const intialState = {
  loading: false,
  name: "Brainey",
  age: "200",
  height: "5cm",
  id: "0",
  isFetching: false,
  error: "",
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };

    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
