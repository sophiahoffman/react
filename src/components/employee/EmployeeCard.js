import React, { Component } from 'react';
import { Link } from "react-router-dom"

class EmployeeCard extends Component {
  render() {

    return (
      <div className="card">

        <div className="card-content">
          <picture>
            <img src={require(`./John_Doe.png`)} alt={this.props.employee.name} />
          </picture>
          <h3>Employee: <span className="card-EmployeeName">{this.props.employee.name} </span></h3>
            <p>Employee since: {this.props.employee.startDate} </p>
            <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id, this.props.state.comp)}>Terminated</button>
            <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
            <button type="button" onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`)}}>Edit</button>

        </div>
      </div>
    );
  }
}

export default EmployeeCard;