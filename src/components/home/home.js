import React from 'react'
import {Carousel, Col, Row} from 'antd';
import data from "./data";


function AppHero() {
    return (
        <div id="home" className="heroBlock">
            <Carousel>
                {data.map(data => {
                    return (
                        <div className="container-fluid">
                            {/*<Row>*/}
                            {/*    <Col span={8}>*/}
                                    <div className="content">
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </div>
                            {/*    </Col>*/}
                            {/*</Row>*/}

                        </div>
                    );
                })}
            </Carousel>
        </div>

    );
}

export default AppHero;