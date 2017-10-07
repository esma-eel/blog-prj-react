import React, { Component } from 'react';


import { Header } from 'semantic-ui-react';
import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class PostIntro extends Component {
    

    render() {
        
        return (
           <div className="post-intro">
               <Header as='h2'> { this.props.hText } </Header>
               <p>
                    {this.props.infoText }
               </p>
           </div>
        );
    }
}

export default PostIntro;
