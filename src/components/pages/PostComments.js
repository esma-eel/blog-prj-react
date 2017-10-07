import React, { Component } from 'react';


import { Button, Comment, Form, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../../semantic/dist/semantic.rtl.min.css";
import '../../css/master.css';
class PostComments extends Component {

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateComment = this.generateComment.bind(this);
        this.state = {
            comments: [
                'ایول حاجی'
                ,
                'عجب مقاله ای'
            ],
        }
    }


    // handleChange(e) {
    //     let value = e.target.value;
    //     this.state.comments.push(value);
    //     this.setState({changed: true});
    // }


    handleSubmit(e) {
        let cmval = this.refs.cmt.value;
        this.state.comments.push(cmval);
        this.setState((prevState) => {
            comments: prevState.comments;
        });

    }


    generateComment(newComment, i) {


        return (
            <Comment key={i}>
                <Comment.Avatar src='http://via.placeholder.com/50x50' />
                <Comment.Content>
                    <Comment.Author as='a'>اسماعیل</Comment.Author>
                    <Comment.Metadata>
                        <div>همین الان</div>
                    </Comment.Metadata>
                    <Comment.Text>{newComment}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>پاسخ</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        );


    }

    render() {
        let detail = this.props.sentData;

        return (
            <Comment.Group>
                <Header as='h3' dividing>Comments</Header>


                {this.state.comments.map(this.generateComment)}


                <Form reply onSubmit={this.handleSubmit}>

                    <div class="ui form">
                        <div class="field">
                            <textarea ref='cmt'>
                            </textarea>
                        </div>
                    </div>

                    <div className="ui divider hidden"></div>
                    <Button content='ارسال دیدگاه' labelPosition='left' icon='edit' primary />
                </Form>
            </Comment.Group>
        );
    }
}

export default PostComments;




