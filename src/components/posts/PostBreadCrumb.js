import React, { Component } from 'react';
import "../../semantic/dist/semantic.rtl.min.css";
import '../../css/master.css';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class PostBreadCrumb extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>
          <Link to={{
            pathname: '/',
          }}>
            خانه
                        </Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>مقالات</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>
          {this.props.title}
        </Breadcrumb.Section>
      </Breadcrumb>
    );
  }
}

export default PostBreadCrumb;
