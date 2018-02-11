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

	}

	render() {
		return (
			<div>
				<h1>Babe details:</h1>
				<div>ID: {this.props.match.params.babeId}</div>
				<br/>
				<Link to="/babes">Go back</Link>
			</div>

		);
	}
}

export default BabeShow;