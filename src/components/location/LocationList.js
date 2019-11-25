import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'
import './Location.css'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
        comp: "locations",
    }

componentDidMount(){
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll(this.state.comp)
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

deleteLocation = (id) => {
  APIManager.delete(id, this.state.comp)
  .then(() => {
    APIManager.getAll(this.state.comp)
    .then((newLocations) => {
      this.setState({
          locations: newLocations
      })
    })
  })
} 

render(){
    console.log("LocationList: Render");
  
    return(
      <React.Fragment>
        {/* //add this button above your display of location cards */}
        <section className="section-content">
          <button type="button"
              className="btn"
              onClick={() => {this.props.history.push("/locations/new")}}>
              Add New Location
          </button>
        </section>

        <div className="container-cards">
          {this.state.locations.map(location =>
            <LocationCard 
            key={location.id} 
            location={location}
            deleteLocation={this.deleteLocation}
            state={this.state}
            props={this.props} 
            />
          )}
        </div>
      </React.Fragment>
    )
  }
 
}

export default LocationList