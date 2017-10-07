import React, { Component } from 'react';

import { Input, Form } from 'semantic-ui-react'

import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class SearchHeader extends Component {
   

    render() {
        
        return (
          <div className="mtransparent-search">
              <h1 className='m-large-h'>
              جستجوی مطالب وبلاگ
              </h1>  
              <div className='search-header'>
                <Form action='/searchResult'>
                    <Form.Field>
                        <Input placeholder='نام مقاله ، برچسب و ... را جستجو کنید'  size='large'/>
                    </Form.Field>
                </Form>
              </div>
          </div>
        );
    }
}

export default SearchHeader;

