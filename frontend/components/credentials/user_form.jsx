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
        this.props.processForm({username: "username", password: "password"});
    }

    render() {

        let emailBox;
        let demoButton;

        if(this.props.formType === "Sign Up"){
            emailBox = (<label>
            <input type="text" value={this.state.email} 
            onChange={this.handleInput("email")} placeholder="Email" />
            </label>)
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
                        <label>
                            <input type="text" value={this.state.username}
                            onChange={this.handleInput("username")} placeholder="Username" />
                        </label>
                        {emailBox}
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
                        {this.props.errors}
                    </ul>
            </div>
            <div className="form-image">
                    <img src="https://i.imgur.com/7liIv50.png"></img>
            </div>
           </div>
           </>
        )
    }

}

export default SessionForm;