import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AnimalCard extends Component {
  
  render() {
    let comp = "animals";
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              {/* <img src= {require(`${this.props.animal.image}`)} key={this.props.id} alt={this.props.animal.name} /> */}
            </picture>
            <h2>Name: <span className="card-petname">{this.props.animal.name}</span></h2>
            <p>Breed: {this.props.animal.breed}</p>
            
            <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id, comp)}>Discharge</button>
            <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
            <button type="button"
              onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          </div>
      </div>
    );
  }
}

export default AnimalCard;