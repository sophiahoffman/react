import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">

        <div className="card-content">
          <picture>
            <img src={require('./John_Doe.png')} alt="John Doe" />
          </picture>
          <h3>Employee: <span className="card-EmployeeName">John Doe</span></h3>
            <p>Employee since: May 2018</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;