import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import { routes } from './routes'


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(item => (
                    <PrivateRoute key={item.path} component={item.component} path={item.path} exact={item.exact} isPrivate={item.isPrivate} />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

