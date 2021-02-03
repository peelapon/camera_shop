import React, { useState,useEffect } from 'react'
import { Row, Col, Pagination } from 'antd';
import axios from 'axios';

const products = [
    {
        name: 'MINOLTA HIMATIC E SILVER',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411340_540x.jpg?v=1608457336',
        price: 4500
    },
    {
        name: 'CANON NEW F-1 WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411259_360x.jpg?v=1608441815',
        price: 17000
    },
    {
        name: 'OLYMPUS OM-1 BLACK WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411250_360x.jpg?v=1608441176',
        price: 10000
    },
    {
        name: 'CONTAX N1 BODY',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55296304_360x.jpg?v=1607000385',
        price: 4500
    },
    {
        name: 'CANON ZOOM LENS FD 24-35MM 1:3.5 L',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55296300_360x.jpg?v=1606989831',
        price: 4500
    },
    {
        name: 'HASSELBLAD 500C/M A70 FILM BACK',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55296274_360x.jpg?v=1606979279',
        price: 1500
    },
    {
        name: 'PENTAX KM WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55296133_360x.jpg?v=1606913233',
        price: 9500
    },
    {
        name: 'MAMIYA M645 1000S WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54984723_360x.jpg?v=1606390617',
        price: 8500
    },
    {
        name: 'MINOLTA HIMATIC E SILVER',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411340_540x.jpg?v=1608457336',
        price: 5500
    },
    {
        name: 'FUJICA G690 WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54984718_360x.jpg?v=1606390349',
        price: 12500
    },
    {
        name: 'PANON WIDELUX F7',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54984713_8d0f7e93-3a8d-4533-8bcf-39bd9441807c_360x.jpg?v=1606390076',
        price: 31000
    },
    {
        name: 'OLYMPUS OM-1 WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54984708_360x.jpg?v=1606389378',
        price: 4500
    },
    {
        name: 'OLYMPUS 35 ED',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54968361_360x.jpg?v=1606388566',
        price: 4500
    },
    {
        name: 'OLYMPUS MJU-III 120',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54968356_360x.jpg?v=1606388394',
        price: 4500
    },
    {
        name: 'OLYMPUS PEN FT WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54968346_360x.jpg?v=1606388226',
        price: 7500
    },
    {
        name: 'CANON DEMI',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54968341_360x.jpg?v=1606388036',
        price: 6500
    },
    {
        name: 'MINOLTA HI-MATIC F SILVER',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47751190_360x.jpg?v=1600949376',
        price: 4500
    },
    {
        name: 'OLYMPUS SUPERZOOM 120SF',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47743123_360x.jpg?v=1600941660',
        price: 4500
    },
    {
        name: 'YASHICA YE WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47743095_360x.jpg?v=1600938283',
        price: 4500
    },
    {
        name: 'OLYMPUS-PEN EED',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47743089_360x.jpg?v=1600937988',
        price: 3700
    },
    {
        name: 'MINOLTA MAC-ZOOM 90 QUARTZ DATE',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47743074_360x.jpg?v=1600936588',
        price: 2200
    },
    {
        name: 'OLYMPUS IZM220 PANORAMA ZOOM',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47743069_360x.jpg?v=1600936197',
        price: 2200
    },
    {
        name: 'OLYMPUS XA WITH FLASH A11',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47743064_360x.jpg?v=1600935936',
        price: 4500
    },
    {
        name: 'OLYMPUS OM-1N WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47743079_360x.jpg?v=1600937039',
        price: 4500
    },
    {
        name: 'OLYMPUS TRIP AF 31',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__47743084_360x.jpg?v=1600937358',
        price: 4500
    },
    {
        name: 'NIKON F-801 WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__46661692_360x.jpg?v=1599825253',
        price: 4500
    },
    {
        name: 'NIKON SPEEDLIGHT SB-22',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__46661679_360x.jpg?v=1599825048',
        price: 4500
    },
]

function Allproducts() {
    const numEachPage = 20
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(20)
    const [products, setProducts] = useState([])
    const handleChange = value => {
        setMinValue((value - 1) * numEachPage)
        setMaxValue((value) * numEachPage)

    };

    useEffect(() => {
        axios.get("http://localhost:8000/products")
        .then(res => {
            setProducts(res.data)
        })
    }, [])

    return (
        <Row justify="center" align="middle" style={{}} >
            <Col span="16">
                <hr style={{ borderTop: '1px solid #ececec', margin: "30px 0 ", borderWidth: "1px 0 0 " }}></hr>
                <Row justify="space-between" align="middle" style={{ marginBottom: "10px" }}>
                    <h1 style={{ fontWeight: "700", fontSize: "25px" }} >SHOP ALL PRODUCTS</h1>
                </Row>
                <a href="http://localhost:3000/singleproduct">
                    <Row align="middle" gutter="32" >
                        {products &&
                            products.length > 0 &&
                            products.slice(minValue, maxValue).map(item => (
                                <Col span="6">
                                    <Row>
                                        <img style={{ width: '100%' }} src={item.img}></img>
                                    </Row>
                                    <Row style={{ color: "#585858", margin: "15px 0" }}>
                                        {item.name}
                                    </Row>
                                    <Row style={{ color: "#000", fontWeight: "bold", margin: "10px 0" }}>
                                        {item.price} ฿
                                    </Row>
                                </Col>
                            ))}
                    </Row>
                </a>
                <Row justify="center" align="middle" style={{ marginTop: "20px" }}>

                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={numEachPage} //default size of page
                        onChange={handleChange}
                        total={products.length} //total number of card data available
                    />

                </Row>


                <hr style={{ borderTop: '1px solid #ececec', margin: "30px 0 ", borderWidth: "1px 0 0 " }}></hr>
            </Col>

        </Row>
    )
}

export default Allproducts
