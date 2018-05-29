import React, { Component } from 'react';

export class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        };
    }
    render (){
        return (
            <div>PeopleList Connected</div>
        )
    }
};