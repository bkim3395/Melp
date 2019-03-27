import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from './welcome/welcome'
import Signup from './credentials/signup_container'
import Login from './credentials/login_container'
import { AuthRoute } from '../util/route_util.js'
import Footer from './footer/footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faYelp } from '@fortawesome/free-solid-svg-icons'


export default (props) => {
    library.add(fab);

    return(
        <>
        <Route exact path="/" component={Welcome} />
        <AuthRoute path="/signup" component={Signup} />
        <AuthRoute path="/login" component={Login} />
        <Footer />
        </>
    );


}