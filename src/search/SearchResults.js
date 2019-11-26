import React, { Component } from "react"
import APIManager from "../modules/APIManager"


class SearchResults extends Component {
    state = {
        employees: [],
        animals: [],
        locations: [],
    }

    componentDidMount() {
        let newState = {};
        APIManager.getAll("employees")
        .then(employees => employees.json())
        .then(employees => newState.employees = employees)
        .then(APIManager.getAll("animals"))
        .then(animals => animals.json())
        .then(animals => newState.animals = animals)
        .then(APIManager.getAll("locations"))
        .then(locations => locations.json())
        .then(locations => newState.locations)
        .then(result => console.log(newState))
        
    }






}

export default SearchResults