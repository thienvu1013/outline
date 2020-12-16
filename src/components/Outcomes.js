import React, { Component } from 'react';

import './Outcome.css';
import OutcomeList from './OutcomeList';
import OutcomeForm from './OutcomeForm';

export class Outcomes extends Component {
	render() {
		return (
			<div className="container">
				<div className=" cont bg-dark text-white">
					<h3>Learning Outcomes</h3>
				</div>
				<OutcomeForm
					outcomes={this.props.outcomes}
					handleChange={this.props.handleChange}
					handleDelete={this.props.handleDelete}
					handleEdit={this.props.handleEdit}
				/>
				<hr />
				<OutcomeList
					handleDelete={this.props.handleDelete}
					handleEdit={this.props.handleEdit}
					outcomes={this.props.outcomes}
					createSelect={this.props.createSelect}
					editSelect={this.props.editSelect}
					selected={this.props.selected}
				/>
			</div>
		);
	}
}

export default Outcomes;
