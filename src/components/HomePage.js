import React, { Component } from 'react';
import logo from '../images/jtp.png';
import './HomePage.css';

export class HomePage extends Component {
	startSearch = () => {
		this.props.search();
	};
	startCreate = () => {
		this.props.create();
	};

	render() {
		return (
			<div className="cont container text-center">
				<div className="branding row">
					<img className="col-12 rounded mx-auto d-block" src={logo} />
					<div class=" btngroup btn-group" role="group">
						<button
							onClick={this.startSearch}
							className="btn btn-outline-info btn-lg"
							type="button"
							id="button-addon2"
						>
							Search
						</button>
						<button
							onClick={this.startCreate}
							className="btn btn-outline-info btn-lg"
							type="button"
							id="button-addon2"
						>
							Create
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
