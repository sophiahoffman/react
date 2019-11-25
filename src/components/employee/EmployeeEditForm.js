import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./EmployeeForm.css"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
      employeeName: "",
      startDate: "",
      comp: "employees",
      loadingStatus: true,
      locations:[],
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault();
      this.setState({ loadingStatus: true });
      const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.employeeName,
        startDate: this.state.startDate,
        locationId: parseInt(this.state.locationId),
      };

      APIManager.update(editedEmployee, this.state.comp)
      .then(() => this.props.history.push("/employees"))
    }



    componentDidMount() {
      APIManager.getOne(this.props.match.params.employeeId, this.state.comp)
      .then(employee => {
          this.setState({
            employeeName: employee.name,
            startDate: employee.startDate,
            locationId: employee.locationId,
            loadingStatus: false,
          });
      });
      APIManager.getAll("locations")
      .then(locations => {
        this.setState({
          locations: locations,
        })
      })
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeeName">Employee name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="startDate"
                value={this.state.startDate}
              />
              <label htmlFor="startDate">Start Date</label>

              <select className="form-control" id="locationId" value={this.state.locationId} onChange={this.handleFieldChange}
              >
              {this.state.locations.map(location =>
              <option key={location.id} value={location.id}>
                {location.name}
              </option>)}
              </select>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm