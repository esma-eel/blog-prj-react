import React, { Component } from 'react';


import { Divider, Container } from 'semantic-ui-react';
import PostIntro from './PostIntro';
import Articles from './Articles';
import PageNavi from './PageNavi';
import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class MainContent extends Component {

    componentWillReceiveProps(newProps) {
        console.log('NEW PROPS :::::::::::: ',newProps);
        this.setState({
            data : newProps.data,
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            data : {},
        }
    }

    render() {

        return (
            <div className="index-wrapper">
                <Divider hidden='true' />
                <Container>
                    <main>

                        <PostIntro hText='آخرین مطالب' infoText='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از' />
                        <Divider hidden='true' />
                        <Articles data = {this.state.data}/>
                        
                        <PageNavi/>
                    </main>
                    <Divider hidden='true' />
                </Container>
            </div>
        );
    }
}

export default MainContent;
