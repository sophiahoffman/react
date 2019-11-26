import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import EmployeeCard from '../employee/EmployeeCard'



class LocationWithEmployees extends Component {
    state = {
        location: {},
        employees: [],
        comp: "locations"
    }

    componentDidMount() {
        // get locations and then employees
        APIManager.getWithEmployees
        (this.props.match.params.locationId, this.state.comp)
            .then(APIResult =>  {
                this.setState({
                    location: APIResult,
                    employees: APIResult.employees,
                })
        })

    }

    deleteEmployee = (id) => {
        let comp = "employees";
        APIManager.delete(id, comp)
        .then(() => {
            APIManager.getAll(comp)
            .then( newLocations => {
                this.setState({
                    locations: newLocations
                })
            })
        })
    }

    render() {
        return (
            <div className = "card">
                <p>Location: {this.state.location.name}</p>
                {this.state.employees.map(employee =>
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        {...this.props}
                        deleteEmployee = {this.deleteEmployee}
                    />
                )}
            </div>
        )
    }
}


export default LocationWithEmployees