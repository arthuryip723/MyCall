import React from 'react';
import { withRouter } from 'react-router';

class BabeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const babe = Object.assign({}, this.state);
    // QUESTION: Why do I receive an action object here?
    // Looks like I will get the object in dispatch() in babe_actions.js
    this.props.createBabe({babe})
      .then(data => this.props.history.push(`/babes/${data.babe.id}`));
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    // TODO Fill the form
    const { name, age } = this.state
    return (
      <div>
        <h3>New babe</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.update('name')}></input>
          </label> 
          <br/><br/>
          <label>
            Age:
            <input type="text" name="age" value={age} onChange={this.update('age')}></input>
          </label> 
          <br/><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(BabeForm);