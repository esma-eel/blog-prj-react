import React, { Component } from 'react';


import { Divider, Container } from 'semantic-ui-react';
import PostIntro from './PostIntro';
import Articles from './Articles';
import PageNavi from './PageNavi';
import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class MainContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="index-wrapper">
                <Divider hidden='true' />
                <Container>
                    <main>

                        <PostIntro hText='آخرین مطالب' infoText='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از' />
                        <Divider hidden='true' />
                        <Articles data = {this.props.data}/>
                        <PageNavi />
                    </main>
                    <Divider hidden='true' />
                </Container>
            </div>
        );
    }
}

export default MainContent;
