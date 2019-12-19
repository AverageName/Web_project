import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import LogButton from './logButton';
import Info from './Info';
import LoginForm from './LoginForm'
import Account from './Account'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      LogForm: 0
    };
  };

  UpdateStateLog = num => {
    this.setState({LogForm: num});
  };

  render() {
    if (this.state.LogForm == 0) {
      return (
        <div className="App">
          <div className="header"> 
            <LogButton isClicked={this.UpdateStateLog}/>
          </div>
          <div className="main-block">
            <Info/>
          </div>
        </div>
      );
    } else if (this.state.LogForm == 1) {
        return (<LoginForm isClicked={this.UpdateStateLog}/>)
    } else {
        return(<Account isClicked={this.UpdateStateLog}/>)
    }
  }
}

