import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">

        <div className="card-content">
          <picture>
            <img src={require('./John_Doe.png')} alt="John Doe" />
          </picture>
          <h3>Owner: <span className="card-OwnerName">John Doe</span></h3>
          <p>Phone: 867-5301</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;