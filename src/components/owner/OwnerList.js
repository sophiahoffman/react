import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager'
import './Owner.css'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
        comp: "owners",
    }

componentDidMount(){
    console.log("OWNER LIST: ComponentDidMount");

    //getAll from OwnerManager and hang on to that data; put it in state
    APIManager.getAll(this.state.comp)
    .then((owners) => {
        this.setState({
            owners: owners
        })
    })
}

render(){
    console.log("OwnerList: Render");

    return(
      <React.Fragment>
        <section className="section-content">
          <button type="button" className = "btn" onClick={() => {this.props.history.push("/owners/new")}}>
            Add An Owner
          </button>

        </section>

        <div className="container-cards">
          {this.state.owners.map(owner =>
            <OwnerCard 
            key={owner.id} 
            owner={owner}
            deleteOwner={this.deleteOwner}
            {...this.props} 

            />
          )}
        </div>
      </React.Fragment>
    )
  }

  deleteOwner = (id) => {

    APIManager.delete(id, this.state.comp)
    .then(() => {
      APIManager.getAll(this.state.comp)
      .then((newOwners) => {
        this.setState({
            owners: newOwners
        })
      })
    })
  }
}

export default OwnerList