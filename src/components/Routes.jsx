import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Users from '../pages/users/Users'
import CreateUser from "../pages/users/CreateUser";
import UpdateUser from "../pages/users/UpdateUser";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/users' exact component={Users}/>
            <Route path='/users/create' component={CreateUser}/>
            <Route path='/users/:id/update' component={UpdateUser}/>
        </Switch>
    )
}

export default Routes
