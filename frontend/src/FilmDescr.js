import React from 'react'
import './styles/Account.css';


export default class FilmDescr extends React.Component {
    state = {
        isOpen: false
    }

    changeState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        let {film} = this.props
        let description = this.state.isOpen || film.description.length < 12 ? film.description : film.description.substring(0, 10) + "..."
        return(
            <div className="about-film">
                <h3>Title: {film.title}</h3><br/>

                <div className='about'>
                    <b className='descr' 
                    onClick={() => this.changeState()}>
                        Description:&nbsp;
                    </b>{description}<br/>
                    <b>Language:</b> {film.language} <br/>
                    <b>Rating:</b> {film.rating}
                </div> 
            </div>
        )
    }
}

