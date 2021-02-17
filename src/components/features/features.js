import React from "react";

import {Card, Col, Row} from 'antd';
import data from "./data";

const { Meta } = Card;

function AppFeatures(){
    return(
      <div className="block featuresBlock bgGray ">
          <div className="container-fluid">
              <Row gutter={[16, 16]}>
                  {data.map(data=>{
                      return(
                          <Col span={8} key={data.key}>
                              <Card
                                  hoverable
                                  cover={<img alt="example" src={data.image} />}
                              >
                                  <Meta title={data.title} />
                              </Card>
                          </Col>
                      );
                  })}

              </Row>
          </div>
      </div>
    );
}

export default AppFeatures;