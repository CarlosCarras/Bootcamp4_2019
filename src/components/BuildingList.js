import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const {data, filterText, selectedUpdate, removeUpdate} = this.props;

		// create a filter on the building list constant that allows you to filter
		// on the name of the building
		const building_list = data.filter(directory => {
			return (directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
				      directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);
		}).map(directory => {
			return (
				<tr key = {directory.id}>
						<td className={'code'} > {directory.code} </td>
						<td className={'name'} onClick={() =>
											selectedUpdate(directory.id)} > {directory.name} </td>
			  </tr>
			);
		});

		return <div> { building_list } </div>;
	}
}
export default BuilingList;
