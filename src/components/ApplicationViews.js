import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
// import EmployeeDetail from './employee/EmployeeDetail'
import AnimalForm from './animal/AnimalForm'
import Login from './auth/Login'
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeForm from "./employee/EmployeeForm"
import LocationForm from "./location/LocationForm"
import OwnerForm from "./owner/OwnerForm"
import LocationEditForm from "./location/LocationEditForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import OwnerEditForm from "./owner/OwnerEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
import LocationWithEmployees from "./location/LocationWithEmployees"

class ApplicationViews extends Component {
    // Check if credentials are in local storage
  //returns true/false

  render() {
    return (
      <React.Fragment>
      {/* path for login component */}
        <Route path="/login" render={props => {
          console.log("app view", this.props.user)
            if (this.props.user) {

            return <Redirect to="/" />
            } else {
            return <Login setUser={this.props.setUser} {...props} />
            }
            
        }} />

        <Route exact path="/" render={(props) => {
          return <Home {...props}/>
        }} />
        {/* <Route path="/animal" render={(props) => {
          return <AnimalList />
        }} /> */}
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
              return <AnimalList {...props} />
          } else {
              return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          if (this.props.user) {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail 
          animalId={parseInt(props.match.params.animalId)}
          {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        {/* // Our shiny new route. */}
        <Route path="/animals/new" render={(props) => {
          if (this.props.user) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          if (this.props.user) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
          }}
        />

        {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/animals/1

          It will not handle the following URL because the `(\d+)`
          matches only numbers after the final slash in the URL
          http://localhost:3000/animals/jack
        */}

        <Route exact path="/locations" render={(props) => {
          if (this.props.user) {
            return <LocationList 
            {...props}
          />} else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path = "/locations/:locationId(\d+)" render={(props) => {
          if (this.props.user) {
          return <LocationWithEmployees 
          locationId={parseInt(props.match.params.locationId)}
          {...props} 
          />} else {
            return <Redirect to="/login" />
          }
        }} />
        
        <Route path = "/locations/new" render={(props) => {
          if (this.props.user) {
          return <LocationForm 
          {...props} 
          />} else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path = "/locations/:locationId(\d+)/edit" render={(props) => {
          if (this.props.user) {
            return <LocationEditForm
            {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
        
        <Route exact path="/employees" render={(props) => {
        if (this.props.user) {
          return <EmployeeList 
            {...props}
            />} else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/employees/:employeeId(\d+)" render={(props) => {
        if (this.props.user) {
          return <EmployeeWithAnimals
          employeeId={parseInt(props.match.params.employeeId)}
          {...props}
          />} else {
            return <Redirect to="/login" />
          }
        }} />


        {/* // Our shiny new route. */}
        <Route path="/employees/new" render={(props) => {
        if (this.props.user) {
          return <EmployeeForm 
          {...props} 
          />} else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/employees/:employeeId(\d+)/edit" render={(props) => {
          if (this.props.user) {
            return <EmployeeEditForm
            {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/owners" render={(props) => {
        if (this.props.user) {
          return <OwnerList 
            {...props}
            />} else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/owners/new" render={(props) => {
        if (this.props.user) {
        return <OwnerForm
        {...props}
        />} else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
          if (this.props.user) {
            return <OwnerEditForm
            {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/owners/:ownerId(\d+)/edit" render={(props) => {
          if (this.props.user) {
            return <OwnerEditForm
            {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews