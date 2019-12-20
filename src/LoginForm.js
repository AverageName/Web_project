import React from 'react';
import './styles/LoginForm.css'

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="logForm" action="action_page.php">
                <div className="login">
                    <p><b>Login</b></p>
                    <input id='login' type="text" placeholder="Type in your login"/>
                </div>
                <div className="password">
                    <p><b>Password</b></p>
                    <input id='password' type="password" placeholder="Type in your password"/>
                </div>
                <div className="submit">
                    <button className='submit-button' onClick={() => this.props.auth()}>Sign in</button>
                </div>
                <div className="goback">
                    <button className="gobackButton" onClick={() => this.props.changePage('main')}>Go back to main page</button>
                </div>
            </div> 
        )
    }
}