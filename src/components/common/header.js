import React from 'react';
import {Menu} from "antd";

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i class="fas fa-ghost"></i>
                    <a href="/">DW</a>
                </div>
                <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['Home']}>
                    <Menu.Item key="Home">Home</Menu.Item>
                    <Menu.Item key="About">About</Menu.Item>
                    <Menu.Item key="Achievement">Achievement</Menu.Item>
                    <Menu.Item key="Product">Product</Menu.Item>
                    <Menu.Item key="Contact">Contact Me</Menu.Item>

                </Menu>
            </div>
        </div>
        );
}

export default AppHeader;