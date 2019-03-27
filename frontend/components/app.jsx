import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from './welcome/welcome_container'
import Signup from './credentials/signup_container'
import Login from './credentials/login_container'
import { AuthRoute } from '../util/route_util.js'
import Footer from './footer/footer'

export default (props) => {
    return(
        <>
        <Route exact path="/" component={Welcome} />
        <AuthRoute path="/signup" component={Signup} />
        <AuthRoute path="/login" component={Login} />
        <Footer />
        </>
    );


}