import { connect } from 'react-redux';
import { signup, clearErrors} from '../../actions/session_actions';
import UserForm from './user_form';

const msp = (state) => {
    return {
        user: { first_name: "", last_name: "", email: "", password: "", latitude: 40.751369, longitude: -73.983927 },
        errors: state.errors.session,
        formType: 'Sign Up',
    };
};

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => {dispatch(clearErrors())}
});

export default connect(msp, mdp)(UserForm);

// latitude: 40.751369, longitude: -73.983927},