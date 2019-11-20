import React, { Component } from 'react';
import './LocationDetail.css'
import APIManager from '../../modules/APIManager';

class LocationDetail extends Component {

  state = {
      name: "",
      phoneNumber: "",
      address: ""
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    let comp ="locations";
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.getOne(this.props.locationId, comp)
    .then((location) => {
      this.setState({
        name: location.name,
        phoneNumber: location.phoneNumber,
        address: location.address
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">

            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Phone Number: {this.state.phoneNumber}</p>
            <p>Address: {this.state.address}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;