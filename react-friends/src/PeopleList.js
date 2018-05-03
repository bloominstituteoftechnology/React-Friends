import React from 'react';
import { Card, CardBody, CardTitle, CardText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PeopleList = props => {
        return (
            <div>
                 {props.friends.map(friend => {

                     return (
                         <Card>
                            <CardBody>
                            <CardTitle key={friend.first_name + friend.last_name}>
                                {friend.first_name} {friend.last_name} </CardTitle>
                                <CardText>{friend.email}</CardText>
                                 </CardBody>
                                
                                <UncontrolledDropdown className="mein-problem-children">  
                                        <DropdownToggle caret>
                                            Friends
                                        </DropdownToggle>                                
                                        {friend.friends.map(friendofPerson => {
                                            return (
                                        <DropdownMenu key={"".concat(friendofPerson.firstName, friendofPerson.lastName)} className="mein-problem-child">
                                        <div className="meinProblemChild">{friendofPerson.firstName}{friendofPerson.lastName}</div>
                                        </DropdownMenu>
                                            )})}
                                </UncontrolledDropdown> 
                                </Card> 
                            );
                        }
                    )} 
                 })}
            </div>
        )
    }

export default PeopleList