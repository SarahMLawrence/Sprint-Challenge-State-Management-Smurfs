//====================================//
//          IMPORT ACTIONS            //
//====================================//
import {
  GETTING_SMURF_START,
  GETTING_SMURF_SUCCESS,
  GETTING_SMURF_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
  UPDATE_SMURF,
  TOGGLE_EDITING,
} from "../actions";

//====================================//
//          INITIAL STATE             //
//====================================//
const initalState = {
  smurfs: [],
  isFetching: false,
  error: "",
  editing: false,
};

//====================================//
//              REDUCER               //
//====================================//
export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GETTING_SMURF_START:
      return {
        ...state,
        isFetching: true,
      };

    case GETTING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };

    case GETTING_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case POST_SMURF_START:
      return {
        ...state,
        isFetching: true,
      };

    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };

    case POST_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        editing: false,
      };

    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing,
      };

    default:
      return state;
  }
};
