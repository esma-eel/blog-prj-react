import React, { Component } from 'react';
import "./semantic/dist/semantic.rtl.min.css";
import './css/master.css';
import Axios from 'axios';
import TopHeader from "./components/TopHeader";
import MainContent from "./components/MainContent";
import Data from './data';
import src from './javascript/javascript.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }

  componentDidMount() {

    
    Axios.get('http://localhost:4000/posts')
        .then((response) => {
            this.setState({
                data: response.data,
            });
        })
        .catch((error) =>{
            console.log(error);
        })

    const script = document.createElement("script");

    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    console.log('hello');
    return (
      <div className="wrapper my-clouds">
        <TopHeader activeMenu='home' />
        <MainContent data={this.state.data} />

      </div>
    );
  }
}

export default App;
