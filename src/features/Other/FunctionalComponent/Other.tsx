import React, { Reducer, useReducer } from 'react';

interface person {
    name: string
    alive: boolean
}

interface action {
    type: string
    payload: string
}

const people: person[] = [
    { name: 'Jay', alive: true },
    { name: 'Kailee', alive: true },
    { name: 'John', alive: true },
    { name: 'Mia', alive: true }
]

const reducer =(people: person[], action: action) => {
    if (action.type == 'chomp') {
        return people.map(person => {
            if (person.name == action.payload) {
                person.alive = false;
            }
            return person;
        })
    }
    if (action.type == 'revive') {
        return people.map(person => {
            if (person.name == action.payload) {
                person.alive = true;
            }
            return person;
        })
    }

//const [state, dispatch] = useReducer(reducer, people)