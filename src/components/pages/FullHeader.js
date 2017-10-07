import React, { Component } from 'react';

import { } from 'semantic-ui-react'

import "../../semantic/dist/semantic.rtl.min.css";
import '../../css/master.css';

class FullHeader extends Component {
   

    render() {
        let detail =  this.props.sentData ;
        return (
          <div className="mtransparent-search">
              <h1 className='m-large-h'>
                عنوان : {detail.title}
              </h1>  
              <p>
                  <em>تاریخ انتشار : </em> <strong>{detail.date}</strong>
                  <span className="xic">
                  <em>توسط : </em> <a href="#!" className="my-text-pumpkin"><strong>{detail.by}</strong></a>
                  </span>
              </p>
          </div>
        );
    }
}

export default FullHeader;

