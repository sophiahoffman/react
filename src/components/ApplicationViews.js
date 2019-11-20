import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animal" render={(props) => {
          return <AnimalList />
        }} />
        <Route exact path="/location" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList />
        }} />
        <Route exact path="/owner" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews