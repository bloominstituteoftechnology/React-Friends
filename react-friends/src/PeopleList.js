import React from 'react';
import './PeopleList.css'

const PeopleList = (props) => {
    return (
        <table className="table">
            <tbody className="table-body">
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                </tr> 
                {props.people.map((profile, index) => {
                    return <tr key={index} className="table-items">
                        <td>{profile.first_name}</td>
                        <td>{profile.last_name}</td>
                        <td>{profile.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default PeopleList;