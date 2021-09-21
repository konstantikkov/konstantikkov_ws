import React from 'react'
import {MainPage} from "./pages/main";
import main from "./jsons/main";
import {TaskPage} from "./pages/univ_task";
import {Switch, Route, Redirect} from 'react-router'
import task from "./jsons/task";

export const useRoutes = () =>
    <Switch>
        <Route path='/main'>
            <MainPage content={main}/>
        </Route>
        <Route path={'/task'}>
            <TaskPage content={task}/>
        </Route>
        <Redirect to={'/main'}/>
    </Switch>;