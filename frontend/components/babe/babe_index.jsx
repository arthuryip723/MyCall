import React from 'react';
import { Link } from 'react-router-dom';

// const BabeIndex = ({ babes }) => (
//   <div>
//     <h1>Babes:</h1>
//     <ul>
//       {babes.map((babe, idx) => <li key={idx}>{babe.name}</li>)}
//     </ul>
//   </div>
// );

class BabeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBabes();
  }

  render() {
    return (
      <div>
        <h1>Babes:</h1>
        <ul>
          {this.props.babes.map((babe, idx) => <li key={idx}><Link to={'/babes/' + babe.id}>{babe.name}</Link></li>)}
        </ul>
        <Link to='/babes/new'>Create babe</Link>
      </div>
    );
  }
}

export default BabeIndex;
