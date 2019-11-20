import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'
import './Location.css'

let comp;
class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

componentDidMount(){
    console.log("LOCATION LIST: ComponentDidMount");
    comp = "locations"
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll(comp)
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

render(){
    console.log("LocationList: Render");
  
    return(
      <div className="container-cards">
        {this.state.locations.map(location =>
          <LocationCard 
          key={location.id} 
          location={location}
          deleteLocation={this.deleteLocation} />
        )}
      </div>
    )
  }

  deleteLocation = (id) => {
    comp = "locations";
    APIManager.delete(id, comp)
    .then(() => {
      APIManager.getAll(comp)
      .then((newLocations) => {
        this.setState({
            locations: newLocations
        })
      })
    })
  }  
}

export default LocationList