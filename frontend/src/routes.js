import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';

export default function routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/contato" exact component={Contact}/>
        </Switch>
        </BrowserRouter>
    )
}