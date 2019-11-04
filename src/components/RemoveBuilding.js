import React from 'react';

class RemoveBuilding extends React.Component {
  removeUpdate() {
      this.props.removeUpdate(this.code.value);
  }

	render() {
		return (
			<div>
          <form>
                <strong> To remove a building, enter its code. </strong>
					      <label className = "field a-field a-field_a1">
						          <input className = "field__input a-field__input"
                             placeholder = "Enter code..."
                             ref={(value) =>{this.code = value}}/>
						          <span className = "a-field__label-wrap">
							               <span className = "a-field__label"> Code </span>
						          </span>
					      </label>

					      <br/>
                <br/>

					      <th className={'submit'} onClick = {this.removeUpdate.bind(this)}>
					           Submit
					      </th>

				  </form>
			</div>
		);
	}
}
export default RemoveBuilding;
