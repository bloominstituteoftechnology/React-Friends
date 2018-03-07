import React, {Component} from 'react';
import Person from './Person.js';

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people:this.props.people
    };
  }

  render() {
    return this.state.people.map( (e,i) =>{
      return <Person data={e} key={i} />;
    });
  }



}

export default PeopleList;
