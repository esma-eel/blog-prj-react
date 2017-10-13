import React, { Component } from 'react';


import { Menu } from 'semantic-ui-react';
import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';

class PageNavi extends Component {

    state = { activeItem: '1' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div className="post-intro">
                <Menu pagination inverted>
                    <Menu.Item name='1' active={activeItem === '1'} onClick={this.handleItemClick} />
                    <Menu.Item name='2' active={activeItem === '2'} onClick={this.handleItemClick} />
                    <Menu.Item name='3' active={activeItem === '3'} onClick={this.handleItemClick} />
                    <Menu.Item disabled>...</Menu.Item>
                    <Menu.Item name='12' active={activeItem === '12'} onClick={this.handleItemClick} />
                    
                </Menu>
            </div>
        );
    }
}

export default PageNavi;
