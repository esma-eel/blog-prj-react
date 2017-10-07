import React, { Component } from 'react';
import "./semantic/dist/semantic.rtl.min.css";
import './css/master.css';
import TopHeader from "./components/TopHeader";
import MainContent from "./components/MainContent";
import Data from './data';
import src from './javascript/javascript.js';

class App extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}

  constructor(props) {
    super(props);
    this.state = {
      data: Data,
    }
  }
  render() {
    return (
      <div className="wrapper my-clouds">
        <TopHeader activeMenu='home' />
        <MainContent data = {this.state.data}/>
        
      </div>
    );
  }
}

export default App;
