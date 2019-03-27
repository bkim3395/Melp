import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Welcome from './welcome';

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

export default connect(msp, mdp)(Welcome);