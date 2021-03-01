import React from "react";

import {Card, Col, Row} from 'antd';
import data from "./data";

const { Meta } = Card;

function AppFeatures(){
    return(
      <div id="features" className="block featuresBlock bgGray ">
          <div className="container-fluid">
              <Row gutter={[16, 16]}>
                  {data.map(data=>{
                      return(
                          <Col  md={{ span: 8}}  sm={{ span: 12}}  xs={{ span: 24}} key={data.key}>
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