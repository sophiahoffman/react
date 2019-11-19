import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">

        <div className="card-content">
          <picture>
            <img src={require(`${this.props.employee.image}`)} alt={this.props.employee.name} />
          </picture>
          <h3>Employee: <span className="card-EmployeeName">{this.props.employee.name} </span></h3>
            <p>Employee since: {this.props.employee.startDate} </p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;