import React from 'react';
import './styles/logButton.css';
import logo from './images/auth_logo.png';


class LogForm extends React.Component {
    render() {
        return (<div>Hello there
            <button onClick={this.props.CloseLogin}>Close mem</button>
        </div>)
    }
}

class LogForm2 extends React.Component {
    render() {
        return (<div className="logIcon">
            <img src={logo} className="image"/>
            <span className="login-span" onClick={() => this.props.isClicked(1)}>Login</span>
        </div>)
    }
}


export default class LogButton extends React.Component {
    /*constructor(){
        super();
        this.state = {isClicked: false};
    }

    UpdateState(){
        this.setState({
            isClicked: !this.state.isClicked
        });
    };
    {(!this.state.isClicked) ? <LogForm2 CloseLogin={this.UpdateState.bind(this)}/> : <LogForm CloseLogin={this.UpdateState.bind(this)}/>}*/

    render() {
        
        return (
        //<div className="logButton1">
            <LogForm2 isClicked={this.props.isClicked}/>
        //</div>
        );
    }
}