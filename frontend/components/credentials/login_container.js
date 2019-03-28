import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import UserForm from './user_form';

const msp = (state) => {
    return {
        user: {email: "", password: ""},
        errors: state.errors.session,
        formType: 'Login',
    };
};

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(msp, mdp)(UserForm);