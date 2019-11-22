import React, { Component } from 'react';
import { Link } from "react-router-dom"

class EmployeeCard extends Component {
  render() {
    let comp = "employees"
    return (
      <div className="card">

        <div className="card-content">
          <picture>
            <img src={require(`./John_Doe.png`)} alt={this.props.employee.name} />
          </picture>
          <h3>Employee: <span className="card-EmployeeName">{this.props.employee.name} </span></h3>
            <p>Employee since: {this.props.employee.startDate} </p>
            <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id, comp)}>Terminated</button>
            <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;