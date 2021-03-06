import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem("access-token") ?
                    <Component {...props} />
                    :
                    <Redirect to="/login" />
            }}
        />
    )
}