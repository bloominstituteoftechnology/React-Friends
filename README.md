# React-Friends

* This mini project is designed to get you used to how components can be built around data that is a bit more complicated, and that doesn't just necessarily exist on a component's state. We're going to be using an external data source (although it'll be found locally in our project) from a file in our app called `people.js`. Your goal is to use `componentDidMount` to set that data on the state of the component you'll be building, and consuming it within a `render` function.

## Topics

* [React's Lifecycle](https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/)
* componentDidMount
* render
* JSON
* this.setState
* props
* className for styling react components

## Before you get started

* If you haven't already, please install `create-react-app`
* [Link here](https://github.com/facebookincubator/create-react-app#getting-started)

## Initialize the progject.

* Fork and clone this project and cd into it.
* From within this directory run `create-react-app react-friends`.
* Move the `people.js` file from this repo into the `src` directory inside of your new `react-friends` project.
* cd into `react-friends` and run `npm start` or `yarn start` and navigate to `localhost:3000`.

## App/PeopleList Set Up

* Inside of `App.js` create your constructor function, (don't forget to super()) and add a state object to it. Inside that state object define an array called People.
* Import people data in like so: `import { people } from './people.js` (if you haven't included people in your `src` directory this wont work);
* Create a method called componentDidMount and set the people data on state.
* Create your `PeopleList` as a function component and import it in as: `import {PeopleList} from './PeopleList'`.
* Pass your `People` data down to PeopleList and render out the People List `<PeopleList people={this.state.People} />`.
* For each person in `PeopleList` render out the first_name and last_name and email.
* Go to town styling your components!

# Styling Components

* Create a file called PeopleList.css and go to town styling! Try and center each person on the screen.
* Import PeopleList styles into PeopleList.js as `import './PeopleList.css'; to grant you access to the className references.
  * Hint: Delete the styles in the app.css and index.css files and do it on your own! Make things look pretty!

```
  componentDidMount(){
   this.setState({People: people});
  }
```

### Examples for use if/when you get a little stuck.

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
        return (
            <div>
              <h4>{person.first_name}</h4>
              <h4>{person.last_name}</h4>
              <div>{person.email}</div>
            </div>
          )
      }))}
    </div>
  )
};
```
