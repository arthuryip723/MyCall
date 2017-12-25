import React from 'react';

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
    this.props.fetchBabes()
  }

  render() {
    // console.log('this.props:', this.props);
    return (
      <div>
        <h1>Babes:</h1>
        <ul>
          {this.props.babes.map((babe, idx) => <li key={idx}>{babe.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default BabeIndex;
