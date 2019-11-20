import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Location: <span className="card-LocationName">{this.props.location.name}</span></h3>
            <p>Address: {this.props.location.address}</p>
            <p>Phone: {this.props.location.phone}</p>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Permanently Closed</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;