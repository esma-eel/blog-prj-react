import React, { Component } from 'react';


import { Menu } from 'semantic-ui-react';
import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class PageNavi extends Component {

    state = { activeItem: '1' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        let hmi = this.props.howManyPages;
        return (
            <div className="post-intro">
                <Menu pagination inverted>
                    <Menu.Item name="1" active={activeItem === "1"} onClick={this.handleItemClick} />
                </Menu>
            </div>
        );
    }
}

export default PageNavi;
