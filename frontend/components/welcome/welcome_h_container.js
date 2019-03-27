import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import WelcomeHeader from './welcome_header';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    }
};

const mdp = (dispatch) => {
    return {
        logout: () => { return dispatch(logout()) }
    }
};

export default connect(msp, mdp)(WelcomeHeader);