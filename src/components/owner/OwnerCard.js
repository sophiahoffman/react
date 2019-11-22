import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">

        <div className="card-content">
          <picture>
            <img src={require(`./John_Doe.png`)} alt={this.props.owner.name} />
          </picture>
          <h3>Owner: <span className="card-OwnerName">{this.props.owner.name}</span></h3>
          <p>Phone: {this.props.owner.phoneNumber}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>No longer an owner</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;