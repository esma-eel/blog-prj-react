import React, { Component } from 'react';


import {  } from 'semantic-ui-react'
import HeadMenu from "../HeadMenu";
import FullHeader from './FullHeader'
import "../../semantic/dist/semantic.rtl.min.css";
import '../../css/master.css';

class FullPostTopHeader extends Component {
    

    render() {
        
        return (
           <header className="full post mhero-post background-lands mheader-flex">
               <HeadMenu active = {this.props.activeMenu}/>
               <FullHeader sentData = {this.props.sentData}/>
           </header>
        );
    }
}

export default FullPostTopHeader;
