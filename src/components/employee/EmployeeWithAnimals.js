import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import AnimalCard from '../animal/AnimalCard'

class EmployeeWithAnimals extends Component {
    state = {
      employee: {},
      animals: [],
      comp: "employees",
    }

    componentDidMount(){
        //got here now make call to get employee with animal
        APIManager.getWithAnimals(this.props.match.params.employeeId, this.state.comp)
            .then((APIResult) => {
            this.setState({
              employee: APIResult,
              animals: APIResult.animals,
            })
        })
    }

    deleteAnimal = (id) => {
        let comp="animals";
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

    render(){
        return (
          <div className="card">
            <p>Employee: {this.state.employee.name}</p>
            {this.state.animals.map(animal =>
              <AnimalCard
                key={animal.id}
                animal={animal}
                {...this.props}
                deleteAnimal = {this.deleteAnimal}
              />
            )}
          </div>
        )
      }
    }

export default EmployeeWithAnimals;