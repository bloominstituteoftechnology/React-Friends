# React-II-Mini

## Topics

* [React's Lifecycle](https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/)
* Create React App
* npm and yarn
* JSON
* more on state, and sophisticated data
* this.setState
* props
* Flexbox

## Lesson Battle Plan 

- Steps to get up and running
  - Step 1: fork and clone this project and cd into it.
  - Step 2: run `npm install create-react-app -g` to install CRA locally.
  - Step 3: run `create-react-app react-friends`.
  - Step 4: move the `people.js` file from this repo into the `src` directory inside of your new `react-friends` project.
  - Step 5: cd into `react-friends` and run `npm start` or `yarn start` and navigate to `localhost:3000`.

- PeopleList Set Up
  - Step 1: inside of `App.js` create your constructor function, (don't forget to super()) and add a state object to it. Inside that state object define an array called People.
  - Step 2: import people data in like so: `import { people } from './people.js` (if you haven't included people in your `src` directory this wont work);
  _ Step 3: create a method called componentDidMount and set the people data on state.
  
  ```
  componentDidMount(){ 
   this.setState({People: people});
  }
  ```

- Person Set Up
  - Step 1: create your `PeopleList` as a function component and import it in as: `import {PeopleList} from './PeopleList'`.
  - Step 2: pass your `People` data down to PeopleList and render out the People List `<PeopleList people={this.state.People} />`.
  - Step 3: inside of `PeopleList.js` iterate over the props.people and display a `<Person />` component for each person. 
  - Step 4: be sure to pass down each person object from the people array to Person `<Person person={person}/>`.


### Examples
#### Your App.JS component Should look similar to this:
```
import React, { Component } from 'react';
import './App.css';
import { people } from './people';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: [],
    };
  }

  componentDidMount() {
    this.setState({People: people});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App</h1>
        <PeopleList people={this.state.People} /> 
      </div>
    );
  }
}

export default App;

```

#### Your PeopleList.JS component Should look similar to this:

```
import React from 'react';
import Person from './Person';
import './PeopleList.css';

export const PeopleList = (props) => {
  return (
    <div className="People-Wrapper">
      {props.people.map((person => {
        return <Person key={person.id} person={person}/> 
      }))}
    </div>
  )
};
```