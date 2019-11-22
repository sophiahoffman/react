import React, { Component } from "react";
import APIManager from "../../modules/APIManager.js"
import './EmployeeDetail.css'


class EmployeeDetail extends Component {
    state = {
        name: "",
        startDate: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("EmployeeDetail: ComponentDidMount");
        let comp = "employees";
        APIManager.getOne(this.props.employeeId, comp)
        .then((employee) => {
            this.setState({
            loadingStatus:false,
            name: employee.name,
            startDate: employee.startDate,
            });
        })
    }

    handleDelete() {
        console.log("EmployeeDetail: HandleDelete");
        let comp = "employees";
        this.setState({loadingStatus:true});
        APIManager.delete(this.props.employeeId, comp)
        .then(() => this.props.history.push("./employees"))
    }

    render (){
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        {/* <img src={require(`${this.state.image}`)} alt={this.state.name} /> */}
                    </picture>
                    <h3>Name: <span style= {{color: 'darkslategrey'}}>{this.state.name}</span></h3>
                    <h3>Start Date: {this.state.startDate}</h3>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Terminate Employee</button>
                </div>
            </div>
        )
    }
}

export default EmployeeDetail
