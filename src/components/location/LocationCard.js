import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>Location: <span className="card-LocationName">Nashville North Location</span></h3>
            <p>Address: 500 Puppy Way</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;