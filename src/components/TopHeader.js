import React, { Component } from 'react';


import {  } from 'semantic-ui-react'
import HeadMenu from "./HeadMenu";
import SearchHeader from "./SearchHeader";

import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class TopHeader extends Component {
    

    render() {
        
        return (
           <header className="full mhero-header background-lands mheader-flex">
               <HeadMenu active = {this.props.activeMenu}/>
               <SearchHeader />
           </header>
        );
    }
}

export default TopHeader;
