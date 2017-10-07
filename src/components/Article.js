import React, { Component } from 'react';


import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class Article extends Component {

    constructor(props) {
        super(props);
    }

    // <Label as='a'>تگ 5</Label>
    renderTags(tag) {
        return (<Label as='a'>{tag}</Label>);
    }

    render() {
        let detail = this.props.detail;
        return (
            <Item>
                <Item.Image src={detail.image} />

                <Item.Content>
                    <Item.Header as='a'>
                    <Link to={{
                                pathname: `/article/${detail.slug}`,
                                query: detail,
                            }}>
                        {detail.title} </Link>
                        </Item.Header>
                    <Item.Meta>

                        <strong>تگ های این مطلب : </strong>
                        <em>
                            {Object.values(detail.tages).map(this.renderTags)}
                        </em>

                        <p className='stay'>
                            <span class="stay">{detail.date}</span>
                        </p>

                    </Item.Meta>
                    <Item.Description>
                        {detail.description}
                    </Item.Description>
                    <Item.Extra>
                    <Link to={{
                                pathname: `/article/${detail.slug}`,
                                query: detail,
                            }}>
                        <Button secondary floated='right'>
                            
                                ادامه
                            <Icon name='left arrow' className='xic' />
                            
                        </Button>
                        </Link>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

export default Article;