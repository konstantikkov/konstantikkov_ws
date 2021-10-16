import React from 'react'
import {MainPage} from "./pages/main";
import main from "./jsons/main";
import mediator from "./jsons/mediator";
import {Switch, Route, Redirect} from 'react-router'
import {MediatorPage} from "./pages/mediator";

export const useRoutes = () =>
    <Switch>
        <Route path='/main'>
            <MainPage content={main}/>
        </Route>
        <Route path='/mediator'>
            <MediatorPage content={mediator}/>
        </Route>
        <Redirect to='/main'/>
    </Switch>;