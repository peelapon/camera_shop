import React from 'react'
import { Row, Col, Button } from 'antd'
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'

function Footer() {
    return (
        <Row justify="center" style={{ height: "25vh", backgroundColor: "#292727", width: "100vw", padding: "20px" }}>

            <Col span="8" >
                <Row style={{ color: "white", fontSize: "1rem", fontWeight: "800", textAlign: "left" }}>
                    CAMERA SHOP UNITY
                </Row>
                <Row style={{ color: "white", fontSize: "15px", textAlign: "left", paddingTop: "10px" }}>
                    <p>Location</p>
                </Row>
                <Row style={{ color: "white", fontSize: "15px", textAlign: "left" }}>
                    <p>236/11 Siam Square Commercial Building 2nd-4th Floor, Siam Square Soi 2, Rama 1., Pathum Wan Sub-District Pathum Wan District, Bangkok 10330</p>
                    <p style={{ fontSize: "13px"}}>Call : 084-025-5637</p>
                </Row>
            </Col>
            <Col span="8" style={{ color: "white", display: "flex", align: "center", justify: "center" }}>
                <Row justify="center" align="middle" style={{ width: '100%', color: "white", fontSize: "2rem", textAlign: "left" }}>

                    <a target='_blank' href="https://www.facebook.com/unityflim" >
                        <FacebookOutlined style={{ padding: "10px" }} />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/unity.film/" >
                        <InstagramOutlined style={{ padding: "10px",color:'linear-gradient()' }} />
                    </a>
                </Row>
            </Col>

        </Row>

    )
}

export default Footer
