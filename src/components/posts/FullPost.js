import React, { Component } from 'react';
import "../../semantic/dist/semantic.rtl.min.css";
import '../../css/master.css';
import Axios from 'axios';
import FullPostTopHeader from "./FullPostTopHeader";
import MainPostContent from './MainPostContent';
class FullPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : '',
      sentData : null,
    }
  }
  componentWillMount() {


    Axios.get('http://localhost:4000/posts/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    return (
      <div className="wrapper my-clouds">
        <FullPostTopHeader activeMenu='' sentData={this.state.data} />
        <MainPostContent sentData={this.state.data} />
      </div>
    );
  }
}

export default FullPost;
