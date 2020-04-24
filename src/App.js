import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'John', age: 29},
            {name: 'François', age: 26}
        ]
    });

    const [otherState, setOtherState] = useState('Some other value');

    console.log(personsState, otherState);

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                {name: newName, age: 28},
                {name: 'John', age: 29},
                {name: 'François', age: 27}
            ]
        });
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'François', age: 26}
            ]
        });
    };

    {
        const style = {
            backgroundColor: 'white',
            font: 'Apple SD Gothic Neo',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        };


        return (
            <div className="App">
                <h1> Hello Alice</h1>
                <p> How are you today ?</p>
                <button
                    style={style}
                    onClick={() => switchNameHandler('Aliiiiice!!')}> Switch Name</button>
                    <div>
                        <Person
                            name={personsState.persons[0].name}
                            age={personsState.persons[0].age}/>
                        <Person
                            name={personsState.persons[1].name}
                            age={personsState.persons[1].name}
                            click={switchNameHandler.bind(this, 'MAXkzjeizaoezajiza')}
                            changed={nameChangedHandler}
                        >
                            My Hobbies: Playing marbles
                        </Person>
                        <Person
                            name={personsState.persons[2].name}
                            age={personsState.persons[2].age}/>
                    </div>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work ??'));
    }

};

export default app;
