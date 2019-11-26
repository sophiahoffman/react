import React, { Component } from 'react'
import './Kennel.css'
// import AnimalCard from './animal/AnimalCard'
// import OwnerCard from './owner/OwnerCard'
// import EmployeeCard from './employee/EmployeeCard';
// import LocationCard from './location/LocationCard';
// import Home from './home/Home';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';

class Kennel extends Component {
  state = {
    user: false
  }

  componentDidMount() {
    // console.log("kennel component did update", this.isAuthenticated());
    this.setState({
      user: this.isAuthenticated()
    })
  }
  // Check if credentials are in local Storage; returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    localStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )

    this.setState({
      user: this.isAuthenticated()
    });

  }

  clearUser = () => {
    localStorage.removeItem("credentials")

    this.setState({
        user: this.isAuthenticated()
    });

}

//------------------
//pass `clearUser()` as props to the **`<NavBar>`** component
// <NavBar user={this.state.user} clearUser={this.clearUser} />

  
    render() {
      console.log("kennel did render")
      return (
        <React.Fragment>
            <NavBar 
              user={this.state.user}
              clearUser={this.clearUser}
            />  
            <ApplicationViews 
              user={this.state.user}
              setUser={this.setUser}
            />          
        </React.Fragment>
      );
    }
  }

export default Kennel