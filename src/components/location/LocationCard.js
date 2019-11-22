import React, { Component } from 'react';
import { Link } from "react-router-dom"

class LocationCard extends Component {
  render() {
    let comp = "locations";
    return (
      <div className="card">
        <div className="card-content">

          <h3>Location: <span className="card-LocationName">{this.props.location.name}</span></h3>
            <p>Address: {this.props.location.address}</p>
            <p>Phone: {this.props.location.phone}</p>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id, comp)}>Permanently Closed</button>
            <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;