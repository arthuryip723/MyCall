import React from 'react';
import { Link } from 'react-router-dom';

// QUESTION How do I get the id?
// How/Where do I use the id to fetch the detail?
// this.props.match.params.userId

// Babe class
class BabeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBabe(this.props.match.params.babeId);
  }

  render() {
    return (
      <div>
        <h1>Babe details:</h1>
        <div>ID: {this.props.babeId}</div>
        <div>Name: {this.props.babe.name}</div>
        <div>Age: {this.props.babe.age}</div>
        <br/>
        <Link to='/babes'>Go back</Link>
      </div>
    );
  }
}

export default BabeShow;
