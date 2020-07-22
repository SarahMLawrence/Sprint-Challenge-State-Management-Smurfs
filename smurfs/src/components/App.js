import React, {Component} from 'react';
import { connect } from 'react-redux';
import Smurfs from "../components/Smurfs";

class App extends Component {
  render(){
    return(
      <div className="main">
        <h1>Smurfs</h1>
        <Smurfs />
      </div>
    )
  }
}

export default App;