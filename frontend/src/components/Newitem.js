import React from 'react'
import { Row, Col } from 'antd';

function Newitem() {
    return (
        <Row justify="center" align="middle" style={{ marginTop: "25px" }} >
            <Col span="16">
                <Row justify="space-between" align="middle" style={{ marginBottom: "10px" }}>
                    <h1 style={{ fontWeight: "700", fontSize: "25px" }}>NEW ITEMS</h1>
                    <a target='_blank' href="http://localhost:3000/products" style={{ color: "#030303" }}>
                        More new items {">"}
                    </a>
                </Row>
                <Row justify="space-between" align="middle" gutter="32" >
                    <Col span="12">
                        <a  href="http://localhost:3000/singleproduct">
                            <Row>
                                <img style={{ width: '100%' }} src="https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411340_540x.jpg?v=1608457336"></img>
                            </Row>
                            <Row style={{ color: "#585858", margin: "15px 0" }}>
                                MINOLTA HIMATIC E SILVER
                          </Row>
                            <Row style={{ color: "#000", fontWeight: "bold", margin: "10px 0" }}>
                                4,500 ฿
                          </Row>
                        </a>


                    </Col>

                    <Col span="12">
                        <Row>
                            <img style={{ width: '100%' }} src="https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411344_540x.jpg?v=1608457489"></img>
                        </Row>
                        <Row style={{ color: "#585858", margin: "15px 0" }}>
                            MINOLTA HIMATIC E SILVER
                    </Row>
                        <Row style={{ color: "#000", fontWeight: "bold", margin: "10px 0" }}>
                            3,500 ฿
                    </Row>
                    </Col>

                </Row>

            </Col>

        </Row>
    )
}

export default Newitem

