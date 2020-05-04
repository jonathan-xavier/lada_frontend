import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Company from './pages/Company/index';
import Vagas from './pages/Vagas/index';
import Recruites from './pages/Recruites/index';
import Home from './pages/Home/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/loginCompany" component={Login} />
                <Route path="/company" component={Company} />
                <Route path="/vagas" component={Vagas} />
                <Route path="/recruites" component={Recruites} />
            </Switch>
        </BrowserRouter>
    );
}
