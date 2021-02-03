import React from 'react'
import { Row, Col } from 'antd';

import Checkout from './Checkout';

function Singleitem() {
    return (
        <Row justify="center" align="middle" style={{ marginTop: "25px", paddingBottom: "50px" }} >
            <Col span="16">
                <Row justify="space-between" gutter="32" >
                    <Col span="12">
                        <Row>
                            <img style={{ width: '100%' }} alt="" src="https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411340_540x.jpg?v=1608457336"></img>
                        </Row>
                    </Col>
                    <Col span="12">
                        <Row>
                            <h1 style={{ fontSize: "1.3rem", fontWeight: "800" }}>MINOLTA HI-MATIC E SILVER</h1>
                        </Row>
                        <Row>
                            <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>4,500  </p>฿
                        </Row>
                        <Row>
                            <Checkout price={4500} />
                        </Row>
                        <hr style={{ borderTop: '1px solid #ececec', margin: "30px 0 ", borderWidth: "1px 0 0 " }}></hr>


                        <Row style={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', fontSize: "13px", color: "#585858", fontFamily: "Montserrat,sans-serif" }}>
                            <div>Condition : Used</div>
                            <div>Camera Type : Rangefinder</div>
                            <div>Focus Type : Manual</div>
                            <div>Film Type : 35mm</div>
                            <div>Lens : Rokkor-QF 40mm 1:1.7</div>
                            <div>Features : Auto Exposure, Built-In Flash, Timer</div><br />
                            <div>Serial number : 888382</div>
                        </Row>

                    </Col>

                </Row>
                <hr style={{ borderTop: '1px solid #ececec', margin: "30px 0 ", borderWidth: "1px 0 0 " }}></hr>

            </Col>

            <Row>


            </Row>

        </Row>
    )
}

export default Singleitem
