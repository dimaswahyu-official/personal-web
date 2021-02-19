import React from 'react'
import {Carousel, Col, Divider, Row} from 'antd';
import data from "./data";


function AppHero() {
    return (
        <div className="heroBlock">
            <Carousel>
                {data.map(data => {
                    return (
                        <div className="container-fluid">
                            <Row>
                                <Col span={10}>
                                    <div className="content">
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </div>
                                </Col>
                                <Col span={14}>
                                    <div className="content">
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    );
                })}
            </Carousel>
        </div>

    );
}

export default AppHero;