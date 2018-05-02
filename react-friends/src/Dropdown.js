import React, { Component } from 'react';
import PeopleList from './PeopleList'

class Dropdown extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showMenu: false,
            friends: []
        };
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({
            showMenu: true,
        })
    }

    render () {
        return (
            <div>
                <PeopleList showMenu={this.state.showMenu} />
    </div>
        );
    }
}

export default Dropdown;