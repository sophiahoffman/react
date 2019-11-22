import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        locationName: "",
        address: "",
        locationPhoneNumber: "",
        loadingStatus: false,
        comp: "locations",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the APIManager post method, and redirect to the full animal list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.locationName === "" || this.state.address === "" || this.state.locationPhoneNumber === "") {
            window.alert("Please input an location name and address");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.locationName,
                address: this.state.address,
                phoneNumber: this.state.locationPhoneNumber,
            };

            // Create the location and redirect user to location list
            APIManager.post(location, this.state.comp)
            .then(() => this.props.history.push("/locations"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="locationName"
                        placeholder="Location name"
                        />
                        <label htmlFor="locationName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="Address"
                        />
                        <label htmlFor="address">Address</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="locationPhoneNumber"
                        placeholder="Phone Number"
                        />
                        <label htmlFor="address">Phone Number</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default LocationForm
