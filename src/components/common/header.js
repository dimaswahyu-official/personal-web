import React, { useState } from 'react';
import {Anchor} from "antd";
import image from '../../assets/images/logodw.png'

import { Drawer, Button } from 'antd';
const {Link} = Anchor;

    function AppHeader() {
        const [visible, setVisible] = useState(false);

        const showDrawer = () => {
            setVisible(true);
        };

        const onClose = () => {
            setVisible(false);
        };
        return (
            <div className="container-fluid">
                <div className="header">
                    <div className="logo">
                        <a href="/">
                            <img alt="logo" src={image} height="60" width="65"/>
                        </a>
                    </div>
                    <div className="mobileHidden">
                        <Anchor targetOffset="65">
                            <Link href="#home" title="Home"> </Link>
                            <Link href="#about" title="About"> </Link>
                            <Link href="#features" title="Features"> </Link>
                            <Link href="#works" title="Works"> </Link>
                        </Anchor>
                    </div>
                    <div className="mobileVisible">
                        <Button type="primary" onClick={showDrawer}>
                            <i className="fas fa-bars"> </i>
                        </Button>
                        <Drawer
                            title="Menu"
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                        >
                            <Anchor targetOffset="65">
                                <Link href="#home" title="Home"> </Link>
                                <Link href="#about" title="About"> </Link>
                                <Link href="#features" title="Features"> </Link>
                                <Link href="#works" title="Works"> </Link>
                            </Anchor>
                        </Drawer>
                    </div>
                </div>

            </div>
        );
    }

export default AppHeader;