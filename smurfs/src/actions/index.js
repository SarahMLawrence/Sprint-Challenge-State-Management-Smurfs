import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";

const headers = {
    Accept: "application/json"
};

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCHING_SMURF_START });
    axios
    .get("http://localhost:3333/smurfs", { headers })
    .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data.message });
    })

    .catch(err => {
        console.log(err);
    });
}

