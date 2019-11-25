import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./OwnerForm.css"

class OwnerEditForm extends Component {
    //set the initial state
    state = {
        ownerName: "",
        ownerPhoneNumber: "",
        comp: "owners",
        loadingStatus: true,
    };

    componentDidMount() {
        APIManager.getOne(this.props.match.params.ownerId, this.state.comp)
        .then(owner => {
            this.setState({
                ownerName: owner.name,
                ownerPhoneNumber: owner.phoneNumber,
                loadingStatus: false,
            });
        })
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        evt.preventDefault();

// prevents user from clicking on button while it's trying to work
        this.setState({ loadingStatus:true});
        const editedOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.ownerName,
            phoneNumber: this.state.ownerPhoneNumber,
        };

        APIManager.update(editedOwner, this.state.comp)
        .then(() => this.props.history.push("/owners"
        ))
    }

    render() {
        return (
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="ownerName" value={this.state.ownerName}
                        />
                        <label htmlFor="ownerName">Owner name</label>

                        <input type="text" required className="form-control" onChange={this.handleFieldChange} id="ownerPhoneNumber" value={this.state.ownerPhoneNumber}
                        />
                        <label htmlFor="ownerPhoneNumber">Phone Number</label>
                        </div>
                        <div className = "alignRight">
                        <button type="button" disabled={this.state.loadingStatus} onClick={this.updateExistingOwner} className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>

            </>
        )
        
    }
}

export default OwnerEditForm