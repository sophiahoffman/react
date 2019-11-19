import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">

        <div className="card-content">
          <picture>
            <img src={require(`${this.props.owner.image}`)} alt={this.props.owner.name} />
          </picture>
          <h3>Owner: <span className="card-OwnerName">{this.props.owner.name}</span></h3>
          <p>Phone: {this.props.owner.phoneNumber}</p>
          <p>Pet: {this.props.owner.animal.name}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;