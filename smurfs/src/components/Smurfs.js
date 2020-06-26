import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const Smurfs = ({ getSmurf, name, age, isFetching, error }) => {
    useEffect(() => {
        getSmurf();
    }, [getSmurf]);

    if(isFetching){
        return <h2>Loading...</h2>;
    }
    return(
        <div className="smurfs">
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        name: state.name,
        age: state.age,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps,{getSmurf})(Smurfs);