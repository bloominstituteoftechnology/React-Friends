import React from "react";

const PeopleList = props => {
    console.log("Props", props);

    return <div>{props.peopleProp.map(p => <div>{p.first_name}{" "}{p.last_name}{" "}{p.email}</div>)}</div>;
};

export default PeopleList;