import React, { Component } from 'react';

export default class Person extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            occupation: '',
            friends: [],
        }
    }
    componentDidMount() {
        const { id, first_name, last_name, email, gender, occupation, friends } = this.props.person;
        this.setState({
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            occupation: occupation,
            friends: friends,
        });
    }

    render() {
        return (
            <div className="People__Person">
                <div>{this.state.first_name}</div>
                <div>{this.state.last_name}</div>
                <div>{this.state.email}</div>
            </div>
        );
    }
}