import React from 'react'
import { Row, Col, Button,  } from 'antd';
import images from '../images/Capture.PNG'

import {
    EnvironmentOutlined
} from '@ant-design/icons'

function Location() {
    return (
        <Row justify="center" align="middle" style={{ marginTop: "25px" }} >
            <Col span="16">
                <Row justify="center" align="middle"  style={{ height: "265px", backgroundColor: "#F8F8F8" }}>
                    <Col span="12" style={{padding:"30px"}} >
                        <Row justify="center" align="middle" >
                            <h1 style={{fontWeight: "bold",fontSize: "17px"}}>CAMERA SHOP UNITY</h1>
                        </Row>
                        <Row justify="center" align="middle" >
                            <p style={{fontSize: "13px"}}>236/11 Siam Square Commercial Building 2nd-4th Floor, Siam Square Soi 2, Rama 1., Pathum Wan Sub-District Pathum Wan District, Bangkok 10330</p>

                        </Row>
                        <Row justify="center" align="middle" >
                            <p style={{fontSize: "13px"}} >Tue - Sun, 11am - 8pm</p>

                        </Row>
                        <Row justify="center" align="middle" >
                            <a target='_blank' href="https://www.google.co.th/maps/place/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%82%E0%B8%B1%E0%B8%99/@13.7767228,100.485181,16.56z/data=!4m5!3m4!1s0x30e2997f5ab39a69:0xd6fa71f9249739a4!8m2!3d13.7773866!4d100.4853116" > 
                                
                            <Button style={{ color: "white", backgroundColor: "black", border: "none", width: "150px", height: "40px" }}>
                                <EnvironmentOutlined /> DIRECTIONS 
                            </Button>
                            </a>
                        </Row>


                    </Col>


                    <Col span="12">
                        <img style={{ width: "100%" }} src={images}></img>



                    </Col>

                </Row>
                <hr style={{ borderTop: '1px solid #ececec', margin: "30px 0 ", borderWidth: "1px 0 0 " }}></hr>
            </Col>
        </Row>
    )
}

export default Location
