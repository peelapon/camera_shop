import React, { useState } from "react";
import { Button, notification } from 'antd'
import Script from 'react-load-script'

import {
    ShoppingCartOutlined
} from '@ant-design/icons'


const publicKey = "pkey_test_5mamxe8utyr7ifkno6j"

const Checkout = (props) => {

    const { price } = props

    const [scriptLoaded, setScriptLoaded] = useState(false)

    let OmiseCard = null

    const handleScriptLoad = () => {
        OmiseCard = window.OmiseCard

        OmiseCard.configure({
            publicKey,
            currency: 'thb',
            frameLabel: 'UNITY Shop',
            submitLabel: 'PAY NOW',
            buttonLabel: 'Pay with Omise'
        });
    }

    const creditCardConfigure = () => {
        OmiseCard.configure({
            defaultPaymentMethod: 'credit_card',
            otherPaymentMethods: []
        });


        OmiseCard.configureButton('#credit-card');

        OmiseCard.attach();
    }

    const handlePayClick = (e) => {
        e.preventDefault()
        creditCardConfigure()
        omiseCardHandler()
    }

    const omiseCardHandler = () => {
        OmiseCard.open({
            frameDescription: 'Invoice #3847',
            amount: price * 100,
            submitFormTarget: '#checkout-form',
            onCreateTokenSuccess: (token) => {
                notification.success({description:"Payment Successful"})
            },
            onFormClosed: () => {
                /* Handler on form closure. */
                OmiseCard = null
            },
        })
    }

    return (
        <div className="own-form">
            < Script
                url="https://cdn.omise.co/omise.js"
                onLoad={() => { setScriptLoaded(true) }}
            />
            <form>
                <Button id='credit-card' key="confirm" disabled={!scriptLoaded} onClick={(e) => {
                    handleScriptLoad()
                    handlePayClick(e)
                }} style={{ color: "white", backgroundColor: "black", border: "none", width: "150px", height: "40px" }}>
                    <ShoppingCartOutlined /> ADD TO CART
                            </Button>
            </form>
        </div>
    )
}

export default Checkout
