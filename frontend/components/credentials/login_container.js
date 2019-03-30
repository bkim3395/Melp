import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import UserForm from './user_form';

const msp = (state) => {
    return {
        user: {email: "", password: ""},
        errors: state.errors.session,
        formType: 'Log In',
    };
};

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => { dispatch(clearErrors())}
});

export default connect(msp, mdp)(UserForm);