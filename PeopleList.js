import React from 'react'
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import FriendList from './FriendList';
import './PeopleList.css';

const PeopleList = props => {
    return (
        <div className="People-Wrapper">
      {props.people.map(person => (
        <Card>
          <CardBody key={person.id}>
            <CardTitle>{`${person.first_name} ${person.last_name}`}</CardTitle>
            <CardSubtitle>{person.email}</CardSubtitle>
            <FriendList friends={person.friends} />
          </CardBody>
        </Card>
      ))}
    </div>
    );
};

export default PeopleList;
