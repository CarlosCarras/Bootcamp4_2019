import React from 'react';

class AddBuilding extends React.Component {
	update() {
		var new_building = {
			id: null,
			code: this.code.value,
			name: this.name.value,
			coordinates: {
				latitude: this.lat.value,
				longitude: this.long.value
			},
			address: this.addr.value
		}
		this.props.addUpdate(new_building);
	}

	render() {
		return (
			<div>
				<strong> Add a new building. </strong>
				<form>

					<label className = "field a-field a-field_a1">
							<input className = "field__input a-field__input"
										 placeholder = "Enter code..."
										 ref = {(value) => {this.code = value}}/>
							<span className = "a-field__label-wrap">
									<span className="a-field__label"> Code </span>
							</span>
					</label>

					<br/>

					<label className = "field a-field a-field_a1">
							<input className = "field__input a-field__input"
							  		 placeholder = "Enter name..."
										 ref = {(value) => {this.name = value}}/>
							<span className = "a-field__label-wrap">
									<span className = "a-field__label"> Name </span>
							</span>
					</label>

					<br/>

					<label className = "field a-field a-field_a1">
							<input className = "field__input a-field__input"
									 	 placeholder = "Enter latitude..."
										 ref = {(value) => {this.lat = value}}/>
							<span className = "a-field__label-wrap">
									<span className = "a-field__label"> Latitude </span>
						  </span>
					</label>

					<br/>

					<label className = "field a-field a-field_a1">
							<input className = "field__input a-field__input"
							       placeholder = "Enter longitude..."
										 ref = {(value) => {this.long = value}}/>
							<span className = "a-field__label-wrap">
									<span className = "a-field__label"> Longitude </span>
							</span>
					</label>

					<br/>

					<label className = "field a-field a-field_a1">
							<input className = "field__input a-field__input"
										 placeholder = "Enter address..."
										 ref = {(value) => {this.addr = value}}/>
							<span className = "a-field__label-wrap">
									<span className = "a-field__label"> Address </span>
							</span>
					</label>

					<br/>
					<br/>

					<th className = {'submit'} onClick = {this.update.bind(this)}>
							 Submit
					</th>

				</form>
			</div>
		);
	}
}
export default AddBuilding;
