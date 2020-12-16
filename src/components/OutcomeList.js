import React, { Component } from 'react';
import OutcomeItem from './OutcomeItem';

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
				<div className="row">
					<div className="col-1">ID</div>
					<div className="col-11">Learning outcomes</div>
				</div>
				{renderedList}
			</div>
		);
	}
}

export default OutcomeList;
