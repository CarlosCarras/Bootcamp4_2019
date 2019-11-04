import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText : '',            // filter text starts as null
      selectedBuilding : [],
      data : this.props.data
    };
  }

  filterUpdate(value) {
    // set the filterText property of state to the value passed into function
    this.setState({ filterText : value });
  }

  selectedUpdate(id) {
    // update the selectedBuilding property of state to id passed into function
    this.setState({ selectedBuilding : this.state.selectedBuilding.concat(id)});
  }
// remove a building
  removeUpdate(building_code) {
   var exists = building => building.code === building_code;
   if (this.state.data.some(exists)) {
     var remove_building = this.state.data.slice();

     for (var ii = 0; ii < remove_building.length; ii++) {
       if (remove_building[ii].code === building_code) {
         remove_building.splice(ii, 1);
         break;
       }
     }

     for (var ii = 0; ii < remove_building.length; ii++) {
       remove_building[ii].id = ii + 1;
     }
     this.setState({ data : remove_building })
   }
 }

// add a new building
 addUpdate(building) {
    if (building.code && building.name) {
      var update = this.state.data.slice();
      update.push(building);
      update.sort((a, b) => a.code.localeCompare(b.code));

      for (var ii = 0; ii < update.length; ii++) {
        update[ii].id = ii + 1;
      }

      this.setState({ data : update })
    }
  }

// HTML to be displayed
  render() {
    return (
      <div className = "bg">
          <div className = "row">
              <h1> UF Directory App </h1>
          </div>

        <Search
            filterText = { this.state.filterText }
            filterUpdate = { this.filterUpdate.bind(this) }
        />

        <main>
            <div className = "row">

                <div className = "column_1">
                    <div className = "tableWrapper">
                        <table className = "table table-striped table-hover">
                            <tr>
                                <td>
                                    <strong> Code </strong>
                                    {"  "}
                                    <strong> Name </strong>
                                </td>
                            </tr>
                            <BuildingList
                                data = { this.state.data }
                                filterText = { this.state.filterText }
                                selectedUpdate = { this.selectedUpdate.bind(this) }
                                removeUpdate = { this.removeUpdate.bind(this) }
                            />
                        </table>
                    </div>
                </div>

                <div className = "column_2">
                    <div className = "split">
                        <ViewBuilding
                            selectedBuilding = { this.state.selectedBuilding }
                            data = { this.state.data }
                        />
                    </div>
                    <div className = "split">
                        <AddBuilding
                            addUpdate = { this.addUpdate.bind(this) }
                        />
                    </div>
                    <div className = "split">
                        <RemoveBuilding
                            removeUpdate = { this.removeUpdate.bind(this) }
                        />
                    </div>
                </div>
            </div>
                <Credit />
        </main>
      </div>
    );
  }
}

export default App;
