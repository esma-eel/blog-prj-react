import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Form } from 'semantic-ui-react'
import Axios from 'axios';

import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class SearchHeader extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderResult = this.renderResult.bind(this);
        this.state = {
            query: '',
            data: null,
        }
    }

    handleChange(e) {
        let target = e.target;
        let tname = target.name;
        let tval = target.value;
        this.state[tname] = tval;
        this.setState((prevState) => {
            query: prevState.query;
        });
    }

    renderResult(item) {
        console.log(item)
    }

    handleSubmit(e) {
        e.preventDefault();
        Axios.get(`http://localhost:4000/posts?q=${this.state.query}`)
            .then((response) => {
                this.setState({
                    data: response.data,
                });

                Object.values(this.state.data).map(this.renderResult);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {

        return (
            <div className="mtransparent-search">
                <h1 className='m-large-h'>
                    جستجوی مطالب وبلاگ
              </h1>
                <div className='search-header'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field className="huge">
                            <input placeholder='نام مقاله ، برچسب و ... را جستجو کنید' size='large' name='query' onChange={this.handleChange} />
                        </Form.Field>

                    </Form>

                </div>
            </div>
        );
    }
}

export default SearchHeader;

