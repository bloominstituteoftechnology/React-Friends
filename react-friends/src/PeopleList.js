// we refactored to use functional PeopleList so we need to remove Component
import React from 'react';
//import React, { Component } from 'react';
import './PeopleList.css';

// refactor this people  list to bring in the Person object and just have then person deal with itself
import Person from './Person';

// This class will be re-written as a stateless function, unless it requires state in the future
/*
export default class PeopleList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="People">
                <h2>List of People</h2>
                {this.props.people.map((person, index) => <Person key={index} person={person} />)}
                <h4>Footer</h4>
            </div>
        );
    }
}
*/
export const PeopleList = (props) => {
    return (
        <div>
            {props.people.map((person, index) => <Person key={index} person={person} />)}
        </div>
    );
};