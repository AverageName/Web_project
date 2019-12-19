import React from 'react';
import './styles/Account.css';
import logo from './images/auth_logo.png'

export default class Account extends React.Component {
    render () {
        return (
        <div className="ProfPage">
            <div className="MainContent">
                    <div className="PictureButton">
                        <img className="ProfilePicture" src={logo}/>
                        <button onClick={() => this.props.isClicked(0)}>Back to main page</button>
                    </div>  
                    <div className="PersonInfo">
                        <p>Nickname: </p>
                        <p>Films watched:</p>
                        <p>Films person watched:</p>
                        <div className="WatchedFilms">
                            There will be a list of watched films
                        </div>
                    </div>
            </div>
        </div>)
    }
}