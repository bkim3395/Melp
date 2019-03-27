import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import UserForm from './user_form';

const msp = (state) => {
    return {
        user: {username: "", email: "", password: ""},
        errors: state.errors.session,
        formType: 'Sign Up',
    };
};

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(msp, mdp)(UserForm);