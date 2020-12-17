import React, { Component } from 'react';
import Outcomes from './Outcomes';
import HomePage from './HomePage';
import Search from './Search';

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
		step: 0,
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

	startSearch = () => {
		this.setState({ step: 2 });
	};

	startCreate = () => {
		this.setState({ step: 1 });
	};

	navigationSwitch = () => {
		switch (this.state.step) {
			case 0:
				return <HomePage search={this.startSearch} create={this.startCreate} />;
			case 1:
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
			case 2:
				return <Search />;
		}
	};

	render() {
		console.log(this.state.outcomeList);
		return this.navigationSwitch();
	}
}

export default App;
