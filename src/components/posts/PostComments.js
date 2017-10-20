import React, { Component } from 'react';


import { Button, Comment, Form, Header } from 'semantic-ui-react';
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
                {cm : 'باریکلا',
            time: 'چهار روز پیش'},
            {cm : 'عالی بود',
            time: 'سه روز پیش'},
            ],
            nowc : false,
        }
    }


    // handleChange(e) {
    //     let value = e.target.value;
    //     this.state.comments.push(value);
    //     this.setState({changed: true});
    // }


    handleSubmit(e) {
        this.setState({nowc : true})
        let cmval = this.refs.cmt.value;
        this.state.comments.push({cm : cmval, time : 'همین الان'});
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
                        <div>
                            {
                                newComment.time
                            }

                        </div>
                    </Comment.Metadata>
                    <Comment.Text>{newComment.cm}</Comment.Text>
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
                <Header as='h3' dividing>دیدگاه ها</Header>


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




