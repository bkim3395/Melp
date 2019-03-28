import React from 'react';
import InputHeader from '../header/input_header'

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.processForm(this.state);
    }

    handleDemo(event){
        event.preventDefault();
        this.props.processForm({email: "username@gmail.com", password: "password"});
    }

    render() {

        let nameBox;
        let demoButton;
        let errors = this.props.errors.map((ele,idx) => {
            return(<ul key={idx}>{ele}</ul>);
        });

        if(this.props.formType === "Sign Up"){
            nameBox = (<div className="name-form"><label>
            <input type="text" value={this.state.first_name} 
            onChange={this.handleInput("first_name")} placeholder="First Name" />
            </label>
            <label>
                <input type="text" value={this.state.last_name}
                    onChange={this.handleInput("last_name")} placeholder="Last Name" />
            </label></div>)
        }

        else{
            demoButton = (<input type="submit" onClick={this.handleDemo} value="Demo User" />)
        }


        return (
            <>
            <InputHeader />
            <div className="sign-form-whole">
                <div className="sign-form">
                    <h1>{this.props.formType}!</h1>
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
                            {demoButton}
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