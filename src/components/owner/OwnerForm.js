import React, { Component } from 'react';

import APIManager from "../../modules/APIManager"



class OwnerForm extends Component {
    state = {
        ownerName: "",
        ownerPhoneNumber: "",
        comp: "owners",
        loadingStatus: false,
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = [evt.target.value];
        this.setState(stateToChange);
    }

    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.ownerPhoneNumber === "") {
            window.alert ("Please complete name and address of new owner");
        } else {
            this.setState({loadingStatus: true});
            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.ownerPhoneNumber
            };
            APIManager.post(owner, this.state.comp)
            .then(() => this.props.history.push("/owners"));

        }

    }

    render() {
        return (
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text" required id="ownerName" placeholder="Name" onChange={this.handleFieldChange} />
                    <label htmlFor="ownerName">Name</label>
                    <input type="text" required id="ownerPhoneNumber" placeholder="Phone Number" onChange={this.handleFieldChange} />
                    <label htmlFor="ownerPhoneNumber">Phone Number</label>
                </div>
                <div className="alignRight">
                    <button type="button" className="btn"
                    disabled={this.state.loadingStatus} onClick={this.constructNewOwner}>Submit</button>
                </div>
            </fieldset>

        </form>

        )
    }
    
}

export default OwnerForm