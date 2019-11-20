import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'
import './Employee.css'

let comp;
class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    comp = "employees"
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll(comp)
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

render(){
    console.log("EmployeeList: Render");
    
    return(
      <div className="container-cards">
        {this.state.employees.map(employee =>
          <EmployeeCard 
          key={employee.id} 
          employee={employee}
          deleteEmployee = {this.deleteEmployee} />
        )}
      </div>
    )
  }

  deleteEmployee = (id) => {
    comp = "employees";
    APIManager.delete(id, comp)
    .then(() => {
      APIManager.getAll(comp)
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }

}

export default EmployeeList