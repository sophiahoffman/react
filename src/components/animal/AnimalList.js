import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import APIManager from "../../modules/APIManager.js"
import './Animal.css'



class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
        comp: "animals",
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll(this.state.comp)
    .then((animals) => {
      console.log(animals)
        this.setState({
            animals: animals
        })
    })
}

deleteAnimal = (id) => {
  APIManager.delete(id, this.state.comp)
  .then(() => {
    APIManager.getAll(this.state.comp)
    .then((newAnimals) => {
      this.setState({
          animals: newAnimals
      })
    })
  })
}

render(){
    console.log("AnimalList: Render");

    return(
      <React.Fragment>
        {/* //add this button above your display of animal cards */}
        <section className="section-content">
          <button type="button"
              className="btn"
              onClick={() => {this.props.history.push("/animals/new")}}>
              Admit Animal
          </button>
        </section>


      <div className="container-cards">
        {this.state.animals.map(animal =>
          <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={this.deleteAnimal}
          {...this.props}
          />
        )}
      </div>
      </React.Fragment>
    )
  }


}



export default AnimalList