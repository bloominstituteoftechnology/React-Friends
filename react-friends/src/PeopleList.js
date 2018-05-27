import React from "react";

class PeopleList extends React.Component{
    render() { 
        console.log("PROPS: ", this.props);
        return (
            <div>
                {/* <h1>{props.messageFromAppjs}</h1> */}
                {this.props.people.map(person => {
                    return (
                        <div key={person.first_name + person.last_name + person.email}>
                            {}
                            {person.first_name} {person.last_name} {person.email}
                        </div>
                    );
                })}
            </div>
        );
    }; 
    }
    

export default PeopleList;









