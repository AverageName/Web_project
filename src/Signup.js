import React from 'react';
import './styles/logButton.css';

export default class Signup extends React.Component {
    render() {
        return (
            <div className="logForm" action="action_page.php">
                <div className="login">
                    <p><b>Login</b></p>
                    <input id='reg-login' type="text" placeholder="login"/>
                </div>
                <div className="login">
                    <p><b>Email</b></p>
                    <input id='reg-email' type="text" placeholder="email"/>
                </div>
                <div className="password">
                    <p><b>Password</b></p>
                    <input id='reg-password' type="password" placeholder="password"/>
                </div>
                <div className="submit">
                    <button className='submit-button' onClick={() => this.props.reg()}>Sign up</button>
                </div>
                <div className="goback">
                    <button className="gobackButton" onClick={() => this.props.changePage('main')}>Go back to main page</button>
                </div>
            </div> 
        )
    }
}