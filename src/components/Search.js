import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		// update value of filter with value of textbox
		const value = this.myValue.value;
		this.props.filterUpdate(value)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		return (
			<form>
				<input type = "text"
							 ref = {(value) => {this.myValue = value}}
							 onChange = {this.filterUpdate.bind(this)} />
			</form>
		);
	}
}
export default Search;
