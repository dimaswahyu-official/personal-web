import React from "react";
import {Row , Col} from 'antd'
import data from "./data";

function AppAbout(){
    return(
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Me</h2>
                    <p>tech enthusiast </p>
                </div>
                <div className="contentHolder">
                    <p>
                        I can help you to developing an App or a Static Websites. I also can help you to making a premium portofolio/personal resume.
                        I had experiece on React, Android Native, Java, Flutter, and Git.
                    </p>

                </div>
                <div className="contentHolder">
                    <Row gutter={[16, 16]} justify="center">
                        {data.map(data=>{
                            return(
                                <Col xs={{ span: 24, offset: 1 }} md={{ span: 6, offset: 2 }} key={data.key}>
                                    <div className="content">
                                        <div className="icon">
                                            {data.icon}
                                        </div>
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>


            </div>
        </div>
        );
}

export default AppAbout;