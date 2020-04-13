import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Person from './Person/Person'
// import Radium, {StyleRoot} from 'radium'

// Part of hook
/*
const App = props => {
  const[personsState, setPersonsState] = useState({
    persons:[
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Steephanie", age: 25}
    ]
    
  });

  const[otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  
  const switchNameHandler = () => {
    // console.log("Was clicked");
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian";

    this.setState({persons: [
      {name: "Maximilian", age: 28},
      {name: "Manu", age: 29},
      {name: "Steephanie", age: 27}
    ]});
  };

  return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>My hobbies: Racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  */
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid green;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

  class App extends Component{

  state = {
      persons:[
        {id:"a", name: "Max", age: 28},
        {id:"b",name: "Manu", age: 29},
        {id:"c",name: "Steephanie", age: 25}
      ],
      otherState: 'some other value',
      showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("Was clicked");
  //   // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
  //   this.setState( {
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: "Manu", age: 29},
  //       {name: "Steephanie", age: 27}
  //     ]
  //   })
  // };

  deletePersonHandler(index) {
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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid green',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person,index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              changed={(event) => this.nameChangeHandler(event, person.id)}
              key={person.id} 
              name={person.name} 
              age={person.age}/>
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name}  
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangeHandler}>My hobbies: Racing 
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div> 
      );

      // style.backgroundColor = 'red';
      // style.border = '1px solid red';
      // style[':hover']= {
      //   backgroundColor: 'salmon' ,
      //   color: 'black'
      // }
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* Binding */}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}


        {/* <button style={style} 
                onClick={this.togglePersonsHandler}
        >Toggle Persons</button> */}

        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
        {/* {this.state.showPersons ? 
          <div >
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangeHandler}>My hobbies: Racing 
            </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          </div> 
          : null
        }*/}
      </div>
      // </StyleRoot>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!!!' ))
};  

// export default Radium(App);
export default App;

