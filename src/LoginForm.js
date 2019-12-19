import React from 'react';
import './styles/LoginForm.css'

export default class LoginForm extends React.Component {
    render() {
        return (
            <form className="logForm" action="action_page.php">
                <div class="login">
                    <p><b>Login</b></p>
                    <input type="text" placeholder="Type in your login"/>
                </div>
                <div className="password">
                    <p><b>Password</b></p>
                    <input type="text" placeholder="Type in your password"/>
                </div>
                <div className="submit">
                    <button onClick={() => this.props.isClicked(2)}>Submit</button>
                </div>
                <div className="goback">
                    <button className="gobackButton" onClick={() => this.props.isClicked(0)}>Go back to main page</button>
                </div>
            </form> 
        )
    }
}