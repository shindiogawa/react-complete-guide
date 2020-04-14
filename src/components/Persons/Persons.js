import React, { Component } from 'react';
import Person from './Person/Person'
class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot'};
    }

    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate');
    }
    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map( (person,index) => {
            return <Person 
              click={() => this.props.clicked(index)} 
              changed={(event) => this.props.changed(event, person.id)}
              key={person.id} 
              name={person.name} 
              age={person.age}/>
          });
        };
    }

export default Persons;