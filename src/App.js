import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import AlbumsListContainer from './components/AlbumsListContainer';
import { Route } from 'react-router-dom'
import PhotoPageContainer from './components/PhotoPageContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Route exact path="/" component={AlbumsListContainer} />
            <Route exact path="/albums/:id" component={PhotoPageContainer} />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
