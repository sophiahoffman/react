import React, { Component } from 'react';
import './AnimalDetail.css'
import APIManager from '../../modules/APIManager';

class AnimalDetail extends Component {

  state = {
      name: "",
      breed: "",
      image: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    let comp ="animals";
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.getOne(this.props.animalId, comp)
    .then((animal) => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        image: animal.image,
        loadingStatus: false,
      });

    });
  }

  
  handleDelete = () => {
    let comp = "animals";
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true});
    console.log(this.state)
    APIManager.delete(this.props.animalId, comp)
    .then(() => this.props.history.push("/animals"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./dog.svg`)} alt="My Dog" />

          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>

        </div>
      </div>
    );
  }
}

export default AnimalDetail;
