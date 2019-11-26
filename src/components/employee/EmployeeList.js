import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'
import './Employee.css'


class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
        comp: "employees"
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll(this.state.comp)
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

deleteEmployee = (id) => {
  APIManager.delete(id, this.state.comp)
  .then(() => {
    APIManager.getAll(this.state.comp)
    .then((newEmployees) => {
      this.setState({
          employees: newEmployees
      })
    })
  })
}

render(){
    console.log("EmployeeList: Render");
    
    return(
      <React.Fragment>
            {/* //add this button above your display of animal cards */}
          <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/employees/new")}}>
                Add New Employee
            </button>
          </section>
  
        <div className="container-cards">
          {this.state.employees.map(employee =>
            <EmployeeCard 
            key={employee.id} 
            employee={employee}
            deleteEmployee = {this.deleteEmployee}
            state={this.state}
            {...this.props}
            />
          )}
        </div>
    </React.Fragment>
    )
  }



}

export default EmployeeList