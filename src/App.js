import React, { Component } from 'react';
import './custom.css'
import { Router } from './route/router';


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Router/>
        );
    }
}
