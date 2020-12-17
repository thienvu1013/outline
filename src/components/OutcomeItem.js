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
				className="btn btn-info"
				type="button"
				id="button-addon2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-emoji-smile"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						fillRule="evenodd"
						d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"
					/>
					<path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
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
				<div className="col=2 btn-group">
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
