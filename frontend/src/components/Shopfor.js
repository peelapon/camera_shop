import React from 'react'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

function Shopfor() {
    return (
        <Row justify="center" align="middle" style={{}} >
            <Col span="16">
                <hr style={{ borderTop: '1px solid #ececec', margin: "30px 0 ", borderWidth: "1px 0 0 " }}></hr>
                <Row justify="space-between" align="middle" style={{marginBottom:"10px"}}>
                    <h1 style={{ fontWeight: "700", fontSize: "25px" }} >SHOP FOR</h1>
                    <a target='_blank' href="http://localhost:3000/products" style={{ color: "#030303" }}>
                        More all items {">"}
                    </a>
                </Row>
                <Row justify="space-between" align="middle"  gutter="32" >
                    <Col span="8">
                    <Row>
                       <img style={{width:'100%'}} src="https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411340_540x.jpg?v=1608457336"></img>                       
                    </Row>
                    <Row style={{color:"#585858",margin:"15px 0"}}>
                        MINOLTA HIMATIC E SILVER
                    </Row>
                    <Row style={{color:"#000",fontWeight:"bold",margin:"10px 0"}}>
                        4,500 ฿
                    </Row>


                    </Col>
                    
                    <Col span="8">
                    <Row>
                    <img style={{width:'100%'}} src="https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411281_360x.jpg?v=1608456929"></img>
                    </Row>
                    <Row style={{color:"#585858", margin:"15px 0"}}>
                        MINOLTA HIMATIC E SILVER
                    </Row>
                    <Row style={{color:"#000",fontWeight:"bold",margin:"10px 0"}}>
                        3,500 ฿
                    </Row>
                    </Col>
                    <Col span="8">
                    <Row>
                    <img style={{width:'100%'}} src="https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411272_360x.jpg?v=1608443240"></img>
                    </Row>
                    <Row style={{color:"#585858", margin:"15px 0"}}>
                        MINOLTA HIMATIC E SILVER
                    </Row>
                    <Row style={{color:"#000",fontWeight:"bold",margin:"10px 0"}}>
                        3,500 ฿
                    </Row>
                    </Col>

                </Row>
                <hr style={{ borderTop: '1px solid #ececec', margin: "30px 0 ", borderWidth: "1px 0 0 " }}></hr>
            </Col>

        </Row>
    )
}

export default Shopfor
