import React, { Component } from 'react';
import "../../semantic/dist/semantic.rtl.min.css";
import '../../css/master.css';
import FullPostTopHeader from "./FullPostTopHeader";
import MainPostContent from './MainPostContent';
class FullPost extends Component {

  render() {
    return (
      <div className="wrapper my-clouds">
        <FullPostTopHeader activeMenu='' sentData = {this.props.location.query}/>
        <MainPostContent sentData = {this.props.location.query}/>
      </div>
    );
  }
}

export default FullPost;
