import React from 'react';
import './styles/Account.css';
import logo from './images/auth_logo.png'
import FilmDescr from './FilmDescr'


export default class Account extends React.Component {

    * listOfFilms() {
        let { films } = this.props
        for (let i = 0; i < films.length; i++) {
            yield (
                // <div className="about-film">
                //     <h3>Title: {films[i].title}</h3><br/>
                //     <b>Description:</b> {films[i].description}<br/>
                //     <b>Language:</b> {films[i].language} <br/>
                //     <b>Rating:</b> {films[i].rating} 
                // </div>
                <FilmDescr film={films[i]} />
            )
        }

    }


    render () {
        return (
            <div className="MainContent">
                    <div className="PictureButton">
                        <img className="ProfilePicture" src={logo}/>
                        <button onClick={() => this.props.changePage('main')}>Back to main page</button>
                            {/* /*<p>Choose profile picture:</p>
                            <input id="loadImage" type="file" onChange={}/> */}
                    </div>  
                    <div className="PersonInfo">
                        <p><b>Nickname:</b> {this.props.login}</p>
                        <p><b>Films watched:</b> {this.props.films.length}</p>
                        <p><b>Films person watched:</b></p>
                        
                        <div className="WatchedFilms">
                            {[...this.listOfFilms()]}
                        </div>
                    </div>
            </div>
        )
    }
}