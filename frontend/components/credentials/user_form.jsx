import React from 'react';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
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

    render() {

        let emailBox;

        if(this.props.formType === "Sign Up"){
            emailBox = (<label>Email:
            <input type="text"value={this.state.email} onChange={this.handleInput("email")} />
            </label>)
        }

        return (
            <div>
                <ul id="CredentialErrors">
                    {this.props.errors}
                </ul>
                <form onSubmit={this.handleSubmit} className="authForm">
                    <label>Username:
          <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>
                    {emailBox}
                    <label>Password:
          <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>

                    <button> {this.props.formType} </button>
                </form>
            </div>
        )
    }

}

export default SessionForm;