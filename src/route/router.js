import { Switch, Route } from "react-router-dom";
import { Layout } from '../components/Layout';
import { Home } from '../components/Home';
import { FetchData } from '../components/FetchData';
import { Counter } from '../components/Counter';
import { HashTagList } from '../components/HashTags/HashTagList';
import { AddHashTag } from '../components/HashTags/AddHashTag';
import { Login } from '../components/Login/Login';
import { Logout }   from '../components/Login/Logout';
import  Dashboard  from '../components/Login/Dashboard';
import React, { Component } from 'react';

export class Router extends Component {
    render() {
        return (<Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/hashTagList' component={HashTagList} />
                <Route path='/AddHashTag' component={AddHashTag} />
                <Route path='/Login1' component={Login} />
                <Route path='/Logout' component={Logout} />
                <Route path='/Dashboard' component={Dashboard} />
            </Switch>
        </Layout>);
    }
}
