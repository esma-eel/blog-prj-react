import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react'

import "../semantic/dist/semantic.rtl.min.css";
import '../css/master.css';
import RegLog from "./RegLogModal";
class HeadMenu extends Component {

    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    state = { activeItem: this.props.active };

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state
        return (
            <Menu stackable size='huge' fixed='top'>
                <Menu.Item name='mblog' >
                    <b>بلاگ من</b>
                </Menu.Item>


                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    <Link to={{
                        pathname: '/',
                    }} className='my-text-midnight-blue'>
                        <Icon name='home' />
                        صفحه اصلی
                        </Link>
                </Menu.Item>


                <Menu.Menu position='right'>
                    <Menu.Item
                        name='dashboard'
                        active={activeItem === 'dashboard'}
                        onClick={this.handleItemClick}

                    >
                    <Link to={{
                        pathname: '/dashboard',
                    }} className='my-text-midnight-blue'>
                        مرکز مدیریت
                        </Link>
                </Menu.Item>


                    <Menu.Item
                        name='signlog'
                        active={activeItem === 'signlog'}
                        onClick={this.handleItemClick}

                    >
                        <RegLog />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default HeadMenu;
