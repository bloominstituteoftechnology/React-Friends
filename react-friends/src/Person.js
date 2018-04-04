import React, { Component } from 'react' ;
import './Person.css';

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {},
        };
    }
    componentDidMount() {
        this.setState({person: this.props.person});
    }
    render(){
        return (
            <div className="Person">
                <div>
                    <div className="Name-Header">{this.state.person.first_name}</div>
                    <div className="Name-Header">{this.state.person.last_name}</div>
                    <div className="Email-Title">{this.state.person.email}</div>
                </div>
            </div>
        )
    }
};