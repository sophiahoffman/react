import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/');
  }

  render(){

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li> 
            {(this.props.user) ? <li><Link className="nav-link" to="/animals">Animals</Link></li> : null }
            <li><Link className="nav-link" to="/locations">Locations</Link></li>
            <li><Link className="nav-link" to="/employees">Employees</Link></li>
            {(this.props.user) ?
            <li><Link className="nav-link" to="/owners">Owners</Link></li> : null }
            
            {(this.props.user) ?
            <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li> : <li><Link className="nav-link" to="/login">Login</Link></li>}
          </ul>
        </nav>
      </header>
    )
  }
}
//use withRouter if you don't have access to Route (on Application Views). Import at top and export below "wrapped". No access to props if you don't have a Route component
export default withRouter(NavBar);