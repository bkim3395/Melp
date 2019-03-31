import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from './welcome/welcome'
import Signup from './credentials/signup_container'
import Login from './credentials/login_container'
import { AuthRoute, ProtectedRoute, ProtectedReviewRoute } from '../util/route_util.js'
import Footer from './footer/footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Search from './search/search'
import { Switch } from 'react-router-dom'
import Business from './business/business'
import Review from './business/review'


export default (props) => {
    library.add(fab, faSearch);
    return(
        <>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/search" component={Search} />
            <ProtectedReviewRoute path='/business/:businessId/review'
            component={Review}
            />
            {/* <ProtectedRoute exact path="/business/:businessId/review" component={Review} /> */}
            <Route exact path="/business/:businessId" component={Business} />
            <AuthRoute path="/signup" component={Signup} />
            <AuthRoute path="/login" component={Login} />
        </Switch>
        <Footer />
        </>
    );
    
    
}
// currentUser={props.store.getState().session.currentUser}
// reviews={props.store.getState().entities.reviews}