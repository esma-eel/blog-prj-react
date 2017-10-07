import React, { Component } from 'react';

import { Input, Form } from 'semantic-ui-react'

import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class SearchHeader extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
   handleChange(e) {
       alert(this.refs.searchded.value)
   }

    render() {
        
        return (
          <div className="mtransparent-search">
              <h1 className='m-large-h'>
              جستجوی مطالب وبلاگ
              </h1>  
              <div className='search-header'>
                <Form action='/searchResult'>
                    <Form.Field>
                        <Input placeholder='نام مقاله ، برچسب و ... را جستجو کنید'  size='large' ref='searchded' onChange={this.handleChange}/>
                    </Form.Field>
                </Form>
              </div>
          </div>
        );
    }
}

export default SearchHeader;

