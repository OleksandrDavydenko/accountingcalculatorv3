import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE, RENT_ROUTE } from "../utils/constRoutes";
import 'firebase/compat/auth'
import { Context } from "../../index";
import { useAuthState } from 'react-firebase-hooks/auth'

export const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ? 
    (
        <Switch>
            {privateRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to={RENT_ROUTE} />
        </Switch>
    )
    :
    (
        <Switch>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}