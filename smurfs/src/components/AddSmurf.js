import React, { useState } from "react";

const AddSmurf = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  const handleChanges = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChanges}
            value={newSmurf.name}
            autoComplete="off"
          />
        </div>
        <div>
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={handleChanges}
            value={newSmurf.age}
            autoComplete="off"
          />
        </div>
        <div>
          <input
            type="text"
            name="height"
            placeholder="height"
            onChange={handleChanges}
            value={newSmurf.height}
            autoComplete="off"
          />
        </div>
        <button className="submitButton" type="submit">
          NEW SMURF
        </button>
      </form>
    </div>
  );
};

export default AddSmurf;