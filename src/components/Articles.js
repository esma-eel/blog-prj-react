import React, { Component } from 'react';


import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import Article from './Article';
import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';
class Articles extends Component {
    
    constructor(props) {
        super(props);
        this.renderArticle = this.renderArticle.bind(this);
    }

    renderArticle(post) {
        console.log(post);
        return (<Article detail={ post } />);
    }

    render() {
        const posts = this.props.data;
        return (
            <Item.Group divided>
                {Object.values(posts).map(this.renderArticle)}
            </Item.Group>
        );
    }
}

export default Articles;
