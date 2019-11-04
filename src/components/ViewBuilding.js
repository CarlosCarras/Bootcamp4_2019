import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding} = this.props;

		const building = selectedBuilding.map(id => {
					const {code, name, coordinates, address} = data[id - 1];
		if (coordinates) {
				return (
					<ul>
							<li> <strong> Code: </strong> {code} </li> <br/>
							<li> <strong> Name: </strong> {name} </li> <br/>
							<li> <strong> Coordinates: </strong>
									<ul>
											<li> <strong> Latitude: </strong>  {coordinates.latitude}  </li>
											<li> <strong> Longitude: </strong> {coordinates.longitude} </li>
											<br/>
									</ul>
							</li>
							<li> <strong> Address: </strong> {address} </li> <br/>
					</ul>
				)
			} else {
					return (
						<ul>
								<li> <strong> Code: </strong> {code} </li> <br/>
								<li> <strong> Name: </strong> {name} </li> <br/>
						</ul>
				)
			}
		})


		selectedBuilding.pop();
		return (
				<div>
						<p>
								<strong> For more information, select a building. </strong>
								{ building }
						</p>
			 	</div>
		);
	}
}
export default ViewBuilding;
