import React, { Component } from 'react';
import './LocationDetail.css'
import APIManager from '../../modules/APIManager';


class LocationDetail extends Component {

  state = {
      name: "",
      phoneNumber: "",
      address: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    let comp ="locations";
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.getOne(this.props.locationId, comp)
    .then((location) => {
      this.setState({
        loadingStatus: false,
        name: location.name,
        phoneNumber: location.phoneNumber,
        address: location.address,
      });
    });
  }
// requires being written as a function; not written in the same style as lifecycle hook
  handleDelete = () => {
    let comp = "locations";
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    console.log(this.state)
    this.setState({loadingStatus: true});

    APIManager.delete(this.props.locationId, comp)
    .then(() => this.props.history.push("/locations"))
}

  render() {
    return (
      
      <div className="card">
        <div className="card-content">

            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Phone Number: {this.state.phoneNumber}</p>
            <p>Address: {this.state.address}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Permanently Closed</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;