import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

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
                                        <select className="mein-problem_children" caret>    
                                        <option> Friends </option>                         
                                        {friend.friends.map(friendofPerson => {
                                            return (
                                        <option key={"".concat(friendofPerson.firstName, friendofPerson.lastName)} className="mein-problem-child">
                                         {friendofPerson.firstName}{friendofPerson.lastName}
                                        </option>
                                            )})}
                                        </select>
                                </Card> 
                            );
                        }
                    )} 
            </div>
        )
    }

export default PeopleList