import React from 'react';
import { connect } from 'react-redux';

import { addSmurfs } from "./../actions/index";

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: "",
            position: "",
            nickname: "",
            description: "", 
        }
      }

    handleChange = (evt) => {
        const { name, value } = evt.target;
        this.setState({
            ...this.state,
            [name]: value
          });
    }

    handleSubmit = (evt) => {
        this.setState({
            id: Date.now(),
        })
        this.props.addSmurfs(this.state);
        this.setState({
            id: "",
            name: "",
            position: "",
            nickname: "",
            description: "", 
        })
    }

    render() {

        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" value={this.state.name}/>
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} name="position" id="position" value={this.state.position}/>
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input onChange={this.handleChange} name="nickname" id="nickname" value={this.state.nickname}/>
                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={this.handleChange} name="description" id="description" value={this.state.description}/>
                </div>

                {this.props.error !== "none" && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error}</div>}
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => {
    return {
        error: state.error
    };
  };

export default connect(mapStateToProps, { addSmurfs })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.