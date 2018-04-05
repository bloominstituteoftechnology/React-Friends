import React,{Component} from "react";


const PeopleList = props => {
  //console.log("Props", props);
  // map over peopleProp return a dom elment for each person name in list

    return (
    <div>
        {props.people.map(p => <div key={p.id}>{p.first_name} {p.last_name} : {p.email}</div>)}
    </div>
    )
};

export default PeopleList;


// class PeopleList extends Comment {
//     constructor(props){
//         super(props); 
//         this.state = {
//             people: props.people
//         };
//     }
//     render(){
//         return <div>PeopleList</div>
//     }
// }

// export default PeopleList; 