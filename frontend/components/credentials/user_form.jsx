import React from 'react';
import InputHeader from '../header/input_header'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        let submitForm = this.state;
        submitForm["latitude"] = this.props.geoLat;
        submitForm["longitude"] = this.props.geoLng;
        this.props.processForm(submitForm);
    }

    handleDemo(event){
        event.preventDefault();
        this.props.processForm({email: "username@gmail.com", password: "password"});
    }

    render() {

        let nameBox;
        let demoButton;
        let divider;
        let errors = this.props.errors.map((ele,idx) => {
            return(<ul key={idx}>{ele}</ul>);
        });
        let redirect;

        if(this.props.formType === "Sign Up"){

            const that = this;

            nameBox = (<div className="name-form"><label>
            <input type="text" value={this.state.first_name} 
            onChange={this.handleInput("first_name")} placeholder="First Name" />
            </label>
            <label>
                <input type="text" value={this.state.last_name}
                    onChange={this.handleInput("last_name")} placeholder="Last Name" />
            </label></div>)

            redirect = (<p id="credential-redirect">Already a member? 
             <Link to="/login" className="cr-link">Log In</Link></p>)
            
            if(!this.props.geoExists){

                navigator.geolocation.getCurrentPosition((position) => {
                    that.props.receiveGeolocation(position.coords.latitude, position.coords.longitude);
                });
             }
        }

        else{
            
            demoButton = (<div className="sign-form-buttons">
            <input type="submit" onClick={this.handleDemo} value="Demo User" />
            </div>)

            divider = (<fieldset>
                <legend align="center">OR</legend>
            </fieldset>)

            redirect = (<p id="credential-redirect">New to Melp? 
            <Link to="/signup" className="cr-link">Sign Up</Link></p>)
        }

        return (
            <>
            <InputHeader />
            <div className="sign-form-whole">
                <div className="sign-form">
                    <h1>{this.props.formType}</h1>
                    {redirect}
                        {demoButton}
                        {divider}
                        <form onSubmit={this.handleSubmit} className="authForm">
                        {nameBox}
                        <label>
                            <input type="text" value={this.state.email}
                                onChange={this.handleInput("email")} placeholder="Email" />
                            </label>
                        <label>
                            <input type="password" value={this.state.password} 
                            onChange={this.handleInput("password")} placeholder="Password" />
                        </label>
                        <div className="sign-form-buttons">
                            <input type="submit" value={this.props.formType} /> 
                        </div>
                    </form>
                    <ul id="CredentialErrors">
                        {errors}
                    </ul>
            </div>
            <div className="form-image">
                    <img src={window.signFormURL}></img>
            </div>
           </div>
           </>
        )
    }

}

export default SessionForm;