import React from 'react'
import {MainPage} from "./pages/main";
import main from "./jsons/main";
import mediator from "./jsons/mediator";
import {Switch, Route, Redirect} from 'react-router'
import {MediatorPage} from "./pages/mediator";
import {InteractiveMap} from "./pages/intractive_map";
import {StillInBetaPage} from "./pages/still_in_beta";

export const useRoutes = () =>
    <Switch>
        <Route path='/main'>
            <MainPage content={main}/>
        </Route>
        <Route path='/mediator'>
            <MediatorPage content={mediator}/>
        </Route>
        <Route path='/interactive_map'>
            <InteractiveMap/>
        </Route>
        <Route path='/still_in_beta'>
            <StillInBetaPage/>
        </Route>
        <Redirect to='/main'/>
    </Switch>;