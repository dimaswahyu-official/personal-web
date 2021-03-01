import React from 'react';
import {Anchor, Menu} from "antd";
import image from '../../assets/images/logodw.png'

const {Link} = Anchor;

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <a href="/">
                        <img alt="logo" src={image} height="60" width="65"/>
                    </a>
                </div>
                {/*<Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['Home']}>*/}
                {/*    <Menu.Item key="Home">Home</Menu.Item>*/}
                {/*    <Menu.Item key="About">About</Menu.Item>*/}
                {/*    /!*<Menu.Item key="Achievement">Achievement</Menu.Item>*!/*/}
                {/*    <Menu.Item key="Contact">Contact Me</Menu.Item>*/}
                {/*</Menu>*/}
                <Anchor targetOffset="65">
                    <Link href="#home" title="Home"></Link>
                    <Link href="#about" title="About"></Link>
                    <Link href="#features" title="Features"></Link>
                    <Link href="#works" title="Works"></Link>

                </Anchor>
            </div>
        </div>
        );
}

export default AppHeader;