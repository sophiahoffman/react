import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import APIManager from '../../modules/APIManager'
import './Animal.css'


let comp;

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    comp = "animals";
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll(comp)
    .then((animals) => {
        this.setState({
            animals: animals
        })
    })
}

render(){
    console.log("AnimalList: Render");

    return(
      <div className="container-cards">
        {this.state.animals.map(animal =>
          <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={this.deleteAnimal} />
        )}
      </div>
    )
  }

  deleteAnimal = (id) => {
    comp = "animals";
    console.log(id, comp)
    APIManager.delete(id, comp)
    .then(() => {
      APIManager.getAll(comp)
      .then((newAnimals) => {
        this.setState({
            animals: newAnimals
        })
      })
    })
  }
}



export default AnimalList