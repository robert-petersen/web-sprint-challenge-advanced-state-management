import React from 'react';
import { connect } from 'react-redux';

import Smurf from "./Smurf";
import { getSmurfs } from "./../actions/index";

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return(<div>
            {this.props.gettingSmurfs && <div>Loading Smurfs...</div>}
            {this.props.smurfs.map((aSmurf) => {
                return <Smurf smurf={aSmurf} key={aSmurf.id}/>
            })}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        gettingSmurfs: state.gettingSmurfs,
    };
  };

export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.