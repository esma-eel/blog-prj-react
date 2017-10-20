import React, { Component } from 'react';


import { Divider, Container, Label } from 'semantic-ui-react';
import PostIntro from '../PostIntro';
import PostComments from './PostComments';
import "../../semantic/dist/semantic.rtl.min.css";
import '../../css/master.css';
import PostBreadCrumb from './PostBreadCrumb';
class MainPostContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: {},
        }
        this.renderTags = this.renderTags.bind(this);
    }

    componentWillReceiveProps(nextProps) {
         this.setState({ detail : nextProps.sentData});
     }

     
     renderTags(tg) {
         let x = tg.join("*");
        return (<Label as='a'>{x}</Label>);
    }

   

    render() {
        let fuck = [];
        fuck.push(this.state.detail.tages);
        return (
            <div className="index-wrapper">
                <Divider hidden='true' />
                
                <Container>
                <PostBreadCrumb title={this.state.detail.title}/>
                    <main>

                        <PostIntro hText='به نام خدا' infoText={this.state.detail.kholase} />
                        <Divider hidden='true' />

                        <p>
                            {this.state.detail.description}
                        </p>
                        <br />
                        <p>
                            {this.state.detail.description}
                        </p>

                        <p>
                            منبع (+)
                        </p>
                        <br/>
                        <p>
                        <strong>تگ های این مطلب : </strong>
                        <em>
                            {this.renderTags(fuck)}
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
