import React, { Component } from 'react';
// import styled from 'styled-components'
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component{
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
      persons:[
        {id:"a", name: "Max", age: 28},
        {id:"b",name: "Manu", age: 29},
        {id:"c",name: "Steephanie", age: 25}
      ],
      otherState: 'some other value',
      showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }
  
  

  deletePersonHandler = (index) =>{
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {

    const personIndex =  this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] 
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState( { persons: persons });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }
  
  render() {
    
    console.log('[App.js] render')
    let persons = null;
    

    if(this.state.showPersons) {
      persons = (
          <Persons persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
          />
      );
    }


    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
                  persons={this.state.persons}
                  clicked={this.togglePersonsHandler}          
        />
        {persons}
      </div>
      // </StyleRoot>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!!!' ))
};  

// export default Radium(App);
export default App;

