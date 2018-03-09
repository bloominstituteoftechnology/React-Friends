import React from 'react';
import './PeopleList.css';

const colors = [
  'rgb(159, 243, 178)',
  'rgb(241, 246, 171)',
  'rgb(238, 157, 123)',
  'rgb(223, 154, 181)',
  'rgb(205, 243, 144)',
  'rgb(182, 235, 246)',
  'rgb(180, 171, 231)',
  'rgb(192, 246, 227)',
  'rgb(163, 182, 249)',
  'rgb(241, 196, 252)',
  'rgb(248, 222, 195)',
  'rgb(246, 218, 192)',
  'rgb(205, 249, 199)',
  'rgb(249, 244, 219)',
  'rgb(234, 193, 233)',
  'rgb(206, 225, 242)',
  'rgb(199, 223, 206)',
  'rgb(244, 163, 174)',
  'rgb(253, 214, 210)',
  'rgb(233, 200, 164)',
  'rgb(215, 161, 214)',
  'rgb(207, 227, 175)',
  'rgb(145, 214, 216)',
  'rgb(198, 160, 211)',
  'rgb(212, 144, 160)',
  'rgb(225, 182, 151)',
  'rgb(239, 233, 199)'
];

export default function PeopleList(props) {
  const getColor = () => colors[(Math.floor(Math.random() * colors.length) + 1)-1];
  return (
    <ul className="people-list">
      {props.people != null && props.people.length > 0 && props.people.map((person, index) => {
        return (
          <li className="person" key={index} style={{backgroundColor: getColor()}}>
            <div className="name">
              <span>Name: </span>
              <span className="first-name">{ person.first_name }</span>
              <span> </span>
              <span className="last-name">{ person.last_name }</span>
            </div>
            <a className="email" href={`mailto:${person.email}`}>Email: { person.email }</a>
          </li>
        );
      })}
    </ul>
  );
}
