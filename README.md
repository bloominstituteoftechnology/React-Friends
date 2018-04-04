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

## Initialize the project.

* Fork and clone this project and cd into it.
* From within this directory run `create-react-app react-friends`.
* Move the `people.js` file from this directory into the `src` directory inside of your new `react-friends` project.
* cd into `react-friends` and run `yarn start` or and navigate to `localhost:3000`.

## `App.js` set up

* Inside of `App.js` create your constructor function, (don't forget to super() **Remember The CCR Steps**) and add a state object to it. Inside that state object define an array called People.
* Import people data in like so: `import { people } from './people.js` (if you haven't included people in your `src` directory this wont work);
* Create a method called componentDidMount and set the people data on state.

```
  componentDidMount(){
   this.setState({ people: people });
  }
```

## `PeopleList.js` set up

* Create your `PeopleList` as a function component and got back to `App.js` and import it in as: `import { PeopleList } from './PeopleList'`.
* Pass your `People` data down to PeopleList and render out the People List `<PeopleList people={this.state.people} />`.
* For each person in `PeopleList` render out the first_name and last_name and email.

## Stretch Problem

* Notice that each person object has a an array of friends assigned to it. The goal for the stretch problem will be to have a `FriendsList` drop down built out that hides the friends for each person until it is clicked on.
* Once a user clicks on your FriendsList card, display that user's friends.

# Styling Components

* There are many ways to style a React Application I recommend looking into `Reactstrap` [Link](https://reactstrap.github.io/) and `Styled-Components`[Link](https://www.styled-components.com/). Both are fantastic, but they're two different paradigms.

* **Note** If you want to take the traditional `css` route that is perfectly fine too! There will be a demo provided in the future about `Reactstrap` and `Styled-Components`.
* Create a file called PeopleList.css and go to town styling! Try and center each person on the screen.
* Import PeopleList styles into PeopleList.js as `import './PeopleList.css'; to grant you access to the className references.
  * Hint: Delete the styles in the app.css and index.css files and do it on your own! Make things look pretty!
