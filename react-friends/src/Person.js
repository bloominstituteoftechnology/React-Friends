import React, { Component } from 'react';
import './Person.css';
// eslint-disable-next-line
export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person : {},
        };
    }
    componentDidMount(){
        this.setState({person: this.props.person});
    }
    render() {
        return (
        <div classname="Person-wrapper">
        <h3>{this.state.person.first_name} {this.state.person.last_name} </h3>
        <p>{this.state.person.email}</p>
        <p>{this.state.person.gender}</p>
        <p>{this.state.person.occupation}</p>
        {/* <p>{this.state.person.friends}</p> */}
        </div>
        );
    }

}
//eslint-disable-next-line