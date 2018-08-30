import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faArrowDown)

class App extends Component {
  render() {
    return (
        <div className="App">
            <HomePage/>
        </div>

    );
  }
}

export default App;
