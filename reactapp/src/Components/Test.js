import React, { Component } from 'react'

class Test extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            a:10
        }
        console.log("Constructor");

    }
    componentDidMount() {
        console.log("ComponentDidMount");
        this.setState({
            a:20
        })
    }
    shouldComponentUpdate(){
        console.log("Should Component Update");
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
        console.log(this.state);
    }
    
    render() {
        console.log("Render");
        return (
            <div>
                
            </div>
        );
    }
}
export default Test;