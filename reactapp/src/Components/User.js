import React, { Component } from 'react'
//import propTypes from 'prop-types'
import UserConsumer from '../context';

//rcc yazıp taba basınca eklenti yüklü ise otomatik gelir
class User extends Component {
    state = {
        isVisible : false
    }
    onClickEvent = (e) => {
        this.setState(
            {
               isVisible : !this.state.isVisible
            }
        )
    }
    onDeleteUser = (dispatch, e) => {
        const {id} = this.props;
        dispatch(
            {
                type:"DELETE_USER", 
                payload:id
            }
        )
    }

    render() {
        //Destructing
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;
        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between" style = {{cursor : "pointer"}}>
                                            <h4 className="d-inline" onClick = {this.onClickEvent.bind(this)}>{name}</h4>
                                            <i className="far fa-trash-alt" style = {{cursor : "pointer"}} onClick= {this.onDeleteUser.bind(this, dispatch)}></i>
                                    </div>
                                    {
                                        isVisible  
                                        ? <div className="card-body">
                                            <p className="card-text">Department : {department}</p>
                                            <p className="card-text">Salary : {salary}</p>
                                          </div>
                                        : null
                                    }
                                    
                                </div>
                            </div>
                        );
                    }
                }
            </UserConsumer>

        );
    }
}
/*
User.propTypes = {
    name : propTypes.string.isRequired,
    department : propTypes.string.isRequired,
    salary : propTypes.string.isRequired,
    id : propTypes.number.isRequired
}

*/
export default User;