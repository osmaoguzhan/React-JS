import React, { Component } from 'react'
import propTypes from 'prop-types'

//rcc yazıp taba basınca eklenti yüklü ise otomatik gelir
class User extends Component {
    render() {
        //Destructing
        const {name,department,salary} = this.props;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="far fa-trash-alt" style = {{cursor : "pointer"}}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Department : {department}</p>
                        <p className="card-text">Salary : {salary}</p>
                    </div>
                </div>
            </div>
        );
    }
}
User.propTypes = {
    name : propTypes.string.isRequired,
    department : propTypes.string.isRequired,
    salary : propTypes.string.isRequired
}
User.defaultProps = {
    name : "Name does not exist",
    department : "Department does not exist",
    salary : "Salary does not exist"
}
export default User;