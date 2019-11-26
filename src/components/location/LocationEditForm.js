import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./LocationForm.css"

class LocationEditForm extends Component {
    //set the initial state
    state = {
      locationName: "",
      address: "",
      locationPhoneNumber: "",
      loadingStatus: true,
      comp: "locations",
    };

    componentDidMount() {
      APIManager.getOne(this.props.match.params.locationId, this.state.comp)
      .then(location => {
          this.setState({
            locationName: location.name,
            address: location.address,
            locationPhoneNumber: location.phoneNumber,
            loadingStatus: false,
          });
      });
    }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
      evt.preventDefault();
      this.setState({ loadingStatus: true });
      const editedLocation = {
        id: this.props.match.params.locationId,
        name: this.state.locationName,
        address: this.state.address,
        phoneNumber: this.state.locationPhoneNumber,
      };

      APIManager.update(editedLocation, this.state.comp)
      .then(() => this.props.history.push("/locations"))
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
                id="locationName"
                value={this.state.locationName}
              />
              <label htmlFor="locationName">Location name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="address"
                value={this.state.address}
              />
              <label htmlFor="address">Address</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationPhoneNumber"
                value={this.state.locationPhoneNumber}
              />
              <label htmlFor="locationPhoneNumber">Phone Number</label>            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default LocationEditForm