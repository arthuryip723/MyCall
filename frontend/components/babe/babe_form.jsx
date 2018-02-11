import React from 'react';

class BabeForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    alert('submitting...');
    // TODO Fill this function.
    // Call the dispatch from prop.
  }

  render() {
    // TODO Fill the form
    return (
      <div>
        <h3>New babe</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value=""></input>
          </label> 
          <br/><br/>
          <label>
            Age:
            <input type="text" name="age" value=""></input>
          </label> 
          <br/><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BabeForm;