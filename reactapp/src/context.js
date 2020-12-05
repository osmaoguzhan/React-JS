import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return{
                ...state,
                users : [...state.users,action.payload]
            }
        default:
            return state;
    }
}
export class UserProvider extends Component {
    state = {
        users: [
          {
            name : "Oguzhan Osma",
            department : "NRD1121",
            salary : "4753",
            id: "1"
          },
          {
            name : "Ayşe Fatma",
            department : "NRD1121",
            salary : "4753",
            id : "2"
          },
          {
            name : "Ahmet Mehmet",
            department : "NRD1121",
            salary : "4753",
            id: "3"
          }
        ], 
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }
        
      } 
      
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {
                    this.props.children
                }
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;
