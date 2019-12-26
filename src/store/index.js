import React, {Component} from 'react';
import cookie from 'react-cookies';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type){
        case 'LOGGED_IN':
            return {...state, loggedIn: action.payload};
        case 'LOG_OUT':
            return {...state, loggedIn: false, clinicId: null, clinic: null, role: null };
        case 'SET_CLINIC':
            return {...state, clinic: action.payload, clinicId: action.payload.id};
        case 'SET_CLINIC_ID':
            return {...state, clinicId: action.payload, practiceId: action.practiceId};
        case 'SET_DEFAULTS':
            return {...state, defaults: action.payload};
        case 'SET_ROLE':
            localStorage.setItem('role', action.payload);
            return {...state, role: action.payload };
        default:
            return state;
    }
};

export class AdminProvier extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action));
        },
        loggedIn: !!cookie.load('token'),
        clinic: null,
        role: localStorage.getItem('role'),
        clinicId: null,
        practiceId: null,
        defaults: null
    };
    render() {
        const { state, props: { children } } = this;
        return <Context.Provider value={ state } >{children}</Context.Provider>;
    }
}

export const AdminConsumer = Context.Consumer;