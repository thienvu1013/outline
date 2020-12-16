import React, { Component } from 'react';
import './OutcomeItem.css';

export class OutcomeItem extends Component {
	state = { disabled: true };

	//delete the description
	deleteDesc = () => {
		this.props.handleDelete(this.props.outcome);
	};

	//edit the description
	editDesc = () => {
		this.setState({ disabled: false });
		this.props.createSelect(this.props.outcome);
	};

	//handling edit
	handleEdit = (e) => {
		this.props.editSelect(e);
	};

	//submitting changes
	submitChange = (e) => {
		if (e.key === 'Enter') {
			this.saveChange();
		}
	};

	saveChange = () => {
		this.props.handleEdit(this.props.outcome);
		this.setState({ disabled: true });
	};

	buttonSwitch = () => {
		return this.state.disabled === true ? (
			<button
				onClick={this.editDesc}
				className="btn btn-outline-secondary"
				type="button"
				id="button-addon2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-pencil-fill"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
					/>
				</svg>
			</button>
		) : (
			<button
				onClick={this.saveChange}
				className="btn btn-outline-secondary"
				type="button"
				id="button-addon2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-check-square-fill"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
					/>
				</svg>
			</button>
		);
	};

	render() {
		const { theKey } = this.props;
		return (
			<div className="row">
				<div className="outcome-content col-1">{theKey + 1}</div>
				<div className="outcome-content col-9">
					<div className="input-group flex-nowrap">
						<textarea
							onChange={this.handleEdit}
							onKeyDown={this.submitChange}
							rows="2"
							className="form-control"
							placeholder={
								this.state.disabled === false
									? this.props.selected
									: this.props.outcome
							}
							aria-label={
								this.state.disabled === false
									? this.props.selected
									: this.props.outcome
							}
							value={
								this.state.disabled === false
									? this.props.selected
									: this.props.outcome
							}
							aria-describedby="addon-wrapping"
							disabled={this.state.disabled}
						></textarea>
					</div>
				</div>
				<div className="col=2">
					{this.buttonSwitch()}
					<button
						className="btn btn-outline-secondary"
						onClick={this.deleteDesc}
						type="button"
						id="button-addon2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-trash-fill"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
							/>
						</svg>
					</button>
				</div>
			</div>
		);
	}
}

export default OutcomeItem;
