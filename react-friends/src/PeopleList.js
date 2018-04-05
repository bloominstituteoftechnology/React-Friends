// import React, { Component } from 'react';

// // this is redundant and we don't need this?
// // if class comp, need props to come in via constructor
// // and into state

// class PeopleList extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             people: props.people
//         };
//     }

//     componentDidMount() {
//         console.log(this.props);
//     }

//     render() {
//         return <div>PeopleList</div>;
//     }
// }

// export default PeopleList;

import React from 'react';
import FriendsList from './FriendsList';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import './PeopleList.css';

//this is functional component
const PeopleList = props => {
    return (
        <div className="People-Wrapper">
            {props.people.map(person => (
                <Card>
                    <CardBody key={person.id}>
                        <CardTitle>
                            {`${person.first_name} ${person.last_name}`}
                        </CardTitle>
                        <CardSubtitle>{person.email}</CardSubtitle>
                        <FriendsList friends={person.friends} />
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}

export default PeopleList;