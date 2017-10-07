import React, { Component } from 'react';


import { Divider, Container, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostIntro from '../PostIntro';
import PostComments from './PostComments';
import "../../semantic/dist/semantic.rtl.min.css";
import '../../css/master.css';
import PostBreadCrumb from './PostBreadCrumb';
class MainPostContent extends Component {

    constructor(props) {
        super(props);
    }

     // <Label as='a'>تگ 5</Label>
     renderTags(tag) {
        return (<Label as='a'>{tag}</Label>);
    }

    render() {
        let detail = this.props.sentData;
        return (
            <div className="index-wrapper">
                <Divider hidden='true' />
                
                <Container>
                <PostBreadCrumb title={detail.title}/>
                    <main>

                        <PostIntro hText='به نام خدا' infoText={detail.kholase} />
                        <Divider hidden='true' />

                        <p>
                            {detail.description}
                        </p>
                        <br />
                        <p>
                            {detail.description}
                        </p>

                        <p>
                            منبع (+)
                        </p>
                        <br/>
                        <p>
                        <strong>تگ های این مطلب : </strong>
                        <em>
                            {Object.values(detail.tages).map(this.renderTags)}
                        </em>
                        </p>

                        <PostComments />
                    </main>
                    <Divider hidden='true' />
                </Container>
            </div>
        );
    }
}

export default MainPostContent;
