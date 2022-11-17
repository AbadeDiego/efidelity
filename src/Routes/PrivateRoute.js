import React, { useEffect } from 'react'
import { Route, useHistory } from "react-router-dom";
import Auth from '../Templates/auth';
import Default from '../Templates/default';

export default function PrivateRoute({ component, path, exact, isPrivate }) {
    const history = useHistory();

    useEffect(() => {
        if (isPrivate && !localStorage.getItem('token')) {
            history.push('/login')
        } else if (!isPrivate && localStorage.getItem('token')) {
            history.push('/')
        }
    }, [path])


    return (
        <>
            {
                isPrivate && !localStorage.getItem('token') ? (<></>) :
                    isPrivate ? (
                        <Default>
                            <Route component={component} path={path} exact={exact} />
                        </Default>
                    ) : (
                        <Auth>
                            <Route component={component} path={path} exact={exact} />
                        </Auth>
                    )

            }
        </>
    )
}