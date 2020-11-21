import React from 'react'
import { Route, Switch } from "react-router-dom"
import Navbar from '../Component/Navbar'
import Login from './Login'
import Register from './Register'
import PrivateRoutes from "./PrivateRoutes"
import Home from './Home'
import cityDetail from './CityDetail'


function Routes() {
    return (
        <>
            <Route path="/" render={() => <Navbar />} />
            <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/Login" render={() => <Login />} />
                <Route path="/Register" render={() => <Register />} />
                <Route path="/{city}" render={() => <cityDetail />} />
                <PrivateRoutes />
                <Route render={() => <div>Error:404 page not found</div>} />
            </Switch>
        </>
    )
}
export { Routes }