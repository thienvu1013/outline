import React, { Component } from 'react';

export class OutcomeForm extends Component {
	state = { description: '' };

	//handle change in input field
	handleDescriptionChange = (e) => {
		e.preventDefault();
		this.setState({ description: e.target.value });
	};

	//submitting description to state
	submitDescription = () => {
		this.props.handleChange(this.state.description);
		this.setState({ description: '' });
	};

	//submit when enter key is pressed
	handleEnter = (e) => {
		if (e.key === 'Enter') {
			this.props.handleChange(this.state.description);
			this.setState({ description: '' });
		}
	};

	render() {
		return (
			<div>
				<label className="text-secondary">
					Enter description for each outcome
				</label>
				<div className="input-group mb-3">
					<input
						onChange={this.handleDescriptionChange}
						onKeyDown={(event) => this.handleEnter(event)}
						type="text"
						className="form-control"
						placeholder="Description"
						aria-label="Description"
						aria-describedby="button-addon2"
						value={this.state.description}
					/>
					<div class="input-group-append">
						<button
							onClick={this.submitDescription}
							className="add btn btn-outline-secondary"
							type="button"
							id="button-addon2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								className="bi bi-plus"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default OutcomeForm;
