import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/appContainer';
import './assets/css/main.css';
import './assets/css/bootstrap4.min.css';

import Login from './components/login/loginContainer';
import { AdminProvier } from './store';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { apiPath } from "./config";

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
};

const client = new ApolloClient({
    uri: apiPath,
    cache: false,
    defaultOptions: defaultOptions,
    fetchPolicy: 'network-only'
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <AdminProvier>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path={"/"} component={App}/>
                </Switch>
            </BrowserRouter>
        </AdminProvier>
    </ApolloProvider>
    , document.getElementById('root'));
