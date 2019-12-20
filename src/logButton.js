import React from 'react';
import './styles/logButton.css';
import logo from './images/auth_logo.png';
import Signup from './Signup'


export default class LogButton extends React.Component {

    setFunction = (flag) => {
        if (flag) {
            this.props.getUserInfo()
        } else {
            let page = this.props.isAuthorized ? 'account' : 'auth'
            this.props.changePage(page)
        }
    }

    exitOrSignup = (isAuth) => {
        if (isAuth) {
            this.props.exit()
        } else {
            this.props.changePage('reg')
        }
    }

    render() {
        let { login } = this.props
        let { isAuthorized } = this.props
        let exit = isAuthorized ? 'Log out' : 'Sign up'
        return (
            <div className="logIcon">
                <div className='acc-pic' onClick={() => this.setFunction(isAuthorized)}>
                    <img src={logo} className="image"/>
                    <span className="login-span">
                        {login}&nbsp;
                    </span>
                </div>
                <p onClick={() => this.exitOrSignup(isAuthorized)}>{exit}</p>
            </div>
        )
    }
}