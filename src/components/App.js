import React, { Component } from 'react';
import Outcomes from './Outcomes';

export class App extends Component {
	state = {
		outcomeList: [
			'Have a deep understanding, and practical knowledge of object oriented analysis, design, and development.',
			'Design and develop software programs in Java.',
			'Define the concepts of object-oriented design, such as inheritance and polymorphism.',
			'Apply miscellaneous programming concepts in Java, such as cloning, generic types, multi-threading, event-based programming, etc.',
			'Design and develop client-server applications.',
			'Use databases to store and retrieve information.',
			'Use different design and development utilities and tools.',
		],
		selected: '',
	};

	//handle outcome change
	handleOutcomeChange = (outcome) => {
		if (!this.state.outcomeList.find((element) => element === outcome)) {
			this.setState({ outcomeList: [...this.state.outcomeList, outcome] });
		}
	};

	handleOutcomeDelete = (description) => {
		this.setState({
			outcomeList: this.state.outcomeList.filter(
				(element) => element !== description
			),
		});
	};

	handleOutcomeEdit = (outcome) => {
		this.setState({
			outcomeList: this.state.outcomeList.map((element) =>
				element === outcome ? this.state.selected : element
			),
		});
		this.setState({ selected: '' });
	};

	createSelect = (outcome) => {
		this.setState({ selected: outcome });
	};

	editSelect = (e) => {
		this.setState({ selected: e.target.value });
	};

	render() {
		return (
			<Outcomes
				outcomes={this.state.outcomeList}
				handleChange={this.handleOutcomeChange}
				handleDelete={this.handleOutcomeDelete}
				handleEdit={this.handleOutcomeEdit}
				createSelect={this.createSelect}
				editSelect={this.editSelect}
				selected={this.state.selected}
			/>
		);
	}
}

export default App;
