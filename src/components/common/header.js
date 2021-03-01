import React from 'react';
import {Menu} from "antd";
import image from '../../assets/images/logodw.png'

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <a href="/">
                        <img alt="logo" src={image} height="60" width="65"/>
                    </a>
                </div>
                <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['Home']}>
                    <Menu.Item key="Home">Home</Menu.Item>
                    <Menu.Item key="About">About</Menu.Item>
                    <Menu.Item key="Achievement">Achievement</Menu.Item>
                    <Menu.Item key="Contact">Contact Me</Menu.Item>

                </Menu>
            </div>
        </div>
        );
}

export default AppHeader;