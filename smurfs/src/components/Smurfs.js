import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurf, addSmurf } from "../actions/index";
import AddSmurf from "./AddSmurf";

const Smurfs = (props) => {
  const getSmurfData = props.getSmurf;

  useEffect(() => {
    getSmurfData();
  }, [getSmurfData]);

  return (
    <div>
      <div className="smurfs">
        {props.smurfs.map((smurfs) => (
          <div className="smurflist" key={smurfs.id}>
            <h2>Name: {smurfs.name}</h2>
            <h2>Age: {smurfs.age}</h2>
            <h2>Height: {smurfs.height}</h2>
          </div>
        ))}
      </div>
      <AddSmurf addSmurf={props.addSmurf} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getSmurf, addSmurf })(Smurfs);
