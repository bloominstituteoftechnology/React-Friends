import React from "react";




const PeopleList = (props)=>{
    console.log(props)
    return (
        <div>
            {props.PeopleProps.map((p) => <div >"{p.first_name},  {p.last_name}" , "{p.email}" </div>)}
         
               
       </div> 
    )

}
export default PeopleList;