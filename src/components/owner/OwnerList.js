import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager'
import './Owner.css'

let comp;
class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

componentDidMount(){
    console.log("OWNER LIST: ComponentDidMount");
    comp="owners";
    //getAll from OwnerManager and hang on to that data; put it in state
    APIManager.getAll(comp)
    .then((owners) => {
        this.setState({
            owners: owners
        })
    })
}

render(){
    console.log("OwnerList: Render");

    return(
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard 
          key={owner.id} 
          owner={owner}
          deleteOwner={this.deleteOwner} />
        )}
      </div>
    )
  }

  deleteOwner = (id) => {
    comp = "owners";

    APIManager.delete(id, comp)
    .then(() => {
      APIManager.getAll(comp)
      .then((newOwners) => {
        this.setState({
            owners: newOwners
        })
      })
    })
  }
}

export default OwnerList