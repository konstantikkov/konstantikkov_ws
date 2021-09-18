import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from "./pages/main";
import main from "./jsons/main";

export const useRoutes = () =>
    <Switch>
        <Route path=''>
            <MainPage content={main}/>
        </Route>
    </Switch>;