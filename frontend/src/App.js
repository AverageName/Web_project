import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import LogButton from './LogButton';
import Info from './Info';
import LoginForm from './LoginForm'
import Account from './Account'
import Signup from './Signup'


export default class App extends React.Component {

  state = {
      page: 'main',
      isAuthorized: true,
      login: 'Ke',
      films: [],
    //   url: document.location.href + 'api/'
      url: "http://192.168.0.102:8000" + '/api/'
  }
  auth = () => {
      let login = document.getElementById('login').value
      let password = document.getElementById('password').value

      fetch(this.state.url + 'auth/',{
          method: "POST",
          headers:{
              'Content-Type': 'application/json',
          },
          body:JSON.stringify({
              "login": login,
              "password": password
          })
      })
      .then((response) => {
          return response.json()
      })
      .then((respJson) => {
          if (respJson.success) {
              this.setState({
                  login: login,
                  isAuthorized: true,
                  page: 'main',
              });
          }
      })
  }

  reg = () => {
    let login = document.getElementById('reg-login').value
    let password = document.getElementById('reg-password').value
    let email = document.getElementById('reg-email').value

    fetch(this.state.url + 'registrate/', {
      method: "POST",
          headers:{
              'Content-Type': 'application/json',
          },
          body:JSON.stringify({
              "login": login,
              "password": password,
              "email": email
          })
      })
      .then((response) => {
          return response.json()
      })
      .then((respJson) => {
          if (respJson.success) {
              this.setState({
                  login: login,
                  isAuthorized: true,
                  page: 'main',
              });
          }
      })
  }

  getUserInfo = () => {
      console.log(this.state.url);
      fetch(this.state.url + 'get_user_info/',{
          method: "POST",
          headers:{
              'Content-Type': 'application/json',
          },
          body:JSON.stringify({
              "login": this.state.login
          })
      })
      .then((response) => {
          return response.json()
      })
      .then((respJson) => {
          if (respJson.success) {
            console.log(respJson.films)

            this.setState({
                films: respJson.films,
                page: 'account',
            });
        }
      })
  }

  exit = () => {
    this.setState({
      isAuthorized: false,
      login: 'Login',
      page: 'main'
    })
  }

  changePage = newState => {
      this.setState({
          page: newState,
      });
  };


    render() {
      console.log(this.state.isAuthorized)
        if (this.state.page === 'main') {
            return (
                  <div className="App">
                      <div className="header">
                          <LogButton changePage={this.changePage} isAuthorized={this.state.isAuthorized} login={this.state.login}
                                      getUserInfo={this.getUserInfo} exit={this.exit} reg={this.reg}/>
                      </div>
                      <div className="main-block">
                          <Info/>
                      </div>
                </div>
            );
        } else if (this.state.page === 'auth') {
            return (<LoginForm auth={this.auth} changePage={this.changePage}/>)
        } else if (this.state.page === 'account'){
            return(<Account changePage={this.changePage} films={this.state.films} login={this.state.login}/>)
        } else if (this.state.page === 'reg') {
          return(<Signup changePage={this.changePage} reg={this.reg}/>)
        }
    }
}

