import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Button from '@material-ui/core/Button';


class App extends Component {
    state = {
        persons: [
            {id: 'ezer', name: 'Max', age: 28},
            {id: 'ndbue', name: 'John', age: 29},
            {id: 'hieza', name: 'François', age: 26}
        ],
        otherState: 'Some other value',
        showPersons: false
    };


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        // = const person = Object.assign({}, this.state.persons[personIndex]

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice(); same as the next line
        const persons = [...this.state.persons]; // create copy of the array of persons to manipulate it
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render () {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'Apple SD Gothic Neo',
            border: '1px solid black',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );

            style.backgroundColor= 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                    color: 'black'
            };
        }

        let classes = []; //=red bold
        if (this.state.persons.length <= 2 ){
            classes.push('red'); // classes will be red
        }
        if (this.state.persons.length <= 1){
            classes.push('bold'); //classes = ['red, 'bold']
        }

            return (
            <div className="App">
                <h1> Hello Alice</h1>
                <p className={classes.join(' ')}> How are you today ?</p>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}> Toggle Persons</button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work ??'));
    }

};

export default App;
