import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';
import Categories from './components/Categories'
import {Provider} from './context'
class App extends Component {
  render() {
    return (
          <Provider>
              <div>
                <Categories />
              </div>
          </Provider>
    );
  }
}

export default App;
