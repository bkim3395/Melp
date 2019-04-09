import { connect } from 'react-redux';
import { signup, clearErrors} from '../../actions/session_actions';
import { receiveGeolocation } from '../../actions/filter_actions';
import UserForm from './user_form';

const msp = (state) => {
    let lat = state.ui.geolocation.lat || 40.751369;
    let lng = state.ui.geolocation.lng || -73.983927;
    return {
        user: { first_name: "", last_name: "", email: "", password: "", latitude: lat, longitude: lng },
        errors: state.errors.session,
        formType: 'Sign Up',
        geoLat: lat,
        geoLng: lng,
        geoExists: Boolean(state.ui.geolocation.lat)
    };
};

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => {dispatch(clearErrors())},
    receiveGeolocation: (lat,lng) => dispatch(receiveGeolocation(lat,lng)),
});

export default connect(msp, mdp)(UserForm);