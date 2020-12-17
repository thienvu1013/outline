import React, { Component } from 'react';
import OutcomeItem from './OutcomeItem';
import './OutcomeList.css';

export class OutcomeList extends Component {
	render() {
		const { outcomes } = this.props;
		const renderedList = outcomes.map((outcome, key) => {
			return (
				<div key={key}>
					<OutcomeItem
						theKey={key}
						outcome={outcome}
						handleDelete={this.props.handleDelete}
						handleEdit={this.props.handleEdit}
						createSelect={this.props.createSelect}
						editSelect={this.props.editSelect}
						selected={this.props.selected}
					/>
					<hr />
				</div>
			);
		});
		return (
			<div className="container">
				<div className="outcome-header bg-info text-white row">
					<div className="col-1">
						<h5>ID</h5>
					</div>
					<div className="col-11">
						<h5>Learning outcomes</h5>
					</div>
				</div>
				{renderedList}
			</div>
		);
	}
}

export default OutcomeList;
