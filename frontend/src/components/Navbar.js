import React from 'react'
import { Row, Col, Button } from 'antd'

import {
    ShoppingCartOutlined
} from '@ant-design/icons'

function Navbar() {
    return (
        <Row justify="center" align="middle" style={{ height: "20vh", backgroundColor: "#292727", width: "100vw" }}>
            <Col span="12" style={{ color: "white", fontSize: "5rem", fontWeight: "1000" }}>
                UNITY
            </Col>
            <Col span="12" style={{ color: "white" }}>
                <Button style={{color: "white", backgroundColor:"black", border:"none", width: "120px", height:"40px"}}>
                    <ShoppingCartOutlined /> CART
                </Button>
            </Col>

        </Row>
    )
}

export default Navbar
