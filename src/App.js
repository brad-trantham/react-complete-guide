import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: 0, name: 'Max', age: 28},
      {id: 1, name: 'Manu', age: 29},
      {id: 2, name: 'Stefanie', age: 26},
      {id: 3, name: 'Brad', age: 38}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) =>
  {
    const personIndex = this.state.persons.findIndex(p=>{
        return p.id === id;
    });

    // spread operator for immutability, Object.assign() could also be used
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {
    const style = {}
     
    let persons = null;

    if(this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person name={person.name} age={person.age}
                             click={()=>this.deletePersonHandler(index)}
                             key={person.id}
                             changed={(event)=>this.nameChangedHandler(event, person.id)}/>
            })}
          </div>
        );

        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        };
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    assignedClasses = assignedClasses.join(' ');

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses}>This is really working!</p>
          <button className={classes.Button}
                  onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}    
        </div>
    );
  }
}

export default App;
