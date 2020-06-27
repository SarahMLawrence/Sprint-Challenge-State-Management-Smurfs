import axios from "axios";


export const GETTING_SMURF_START = "GETTING_SMURF_START";
export const GETTING_SMURF_SUCCESS = "GETTING_SMURF_SUCCESS";
export const GETTING_SMURF_FAILURE = "GETTING_SMURF_FAILURE";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";


//============================//
//      GET THE SMURF DATA    //
//============================//

export const getSmurf = () => (dispatch) => {
  dispatch({ type: GETTING_SMURF_START });
  axios.get("http://localhost:3333/smurfs").then((res) => {
    console.log(res.data);
    dispatch({ type: "GETTING_SMURF_SUCCESS", payload: res.data });
  });
  //  .catch((err)=>
  //     console.log(err);
  //     dispatch({ type: "GETTING_SMURF_FAILURE", payload: err });
};


//==============================//
//       ADD NEW SMURF DATA     //
//==============================//

export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: POST_SMURF_START });
  axios.post("http://localhost:3333/smurfs", newSmurf).then((res) => {
    console.log("POSTING SMURF", res);
    dispatch({ type: "POST_SMURF_SUCCESS", payload: res.data });
  });
  // .catch(err =>
  //     console.log(err);
  //     dispatch({ type: "POST_SMURF_FAILURE", payload: err });
};