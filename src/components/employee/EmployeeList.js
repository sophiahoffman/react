import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'
import './Employee.css'


class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    const comp = "employees";
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
          <EmployeeCard key={employee.id} employee={employee} />
        )}
      </div>
    )
  }
}

export default EmployeeList