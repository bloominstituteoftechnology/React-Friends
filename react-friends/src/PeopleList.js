import React from "react";
// import PropTypes from "prop-types";

class PeopleList extends React.Component {
    constructor(props){
        super(props);
        console.log("Props", props);
}
    render () {
        console.log(this.props);
        return (
            <div>
            {this.props.people.map(person => { return (
                <div key = {person.first_name + person.last_name + person.email}>
                    {person.first_name + " " + person.last_name + "   " + "|"  + "   " + person.email}
                </div>
             ) } )}
            </div>);
    }    
 
    
    
}

export default PeopleList;