import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { routes } from '../routes';

const RouterApp = () => {

    return (
        <>
            <Routes>
                {routes.map(route => (
                    <Route 
                        key={route.element}
                        element={<route.element />}
                        path={route.path}
                        exact={route.exact}
                    />
                ))}
            </Routes>
        </>
    )
}

export default RouterApp;
