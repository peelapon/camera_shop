import React from 'react'
import { Menu, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Menubar extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    
    render() {
        const { current } = this.state;
        return (
            <Row justify="center" align="middle" style={{ backgroundColor: "black" }} >
                <Col span="16">
                    <Menu mode="inline" style={{ backgroundColor: "black", border: "none" }} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item  style={{ color: "white" , fontSize: "12px", fontWeight:"500", marginLeft:"0"}} key="mail" >
                        <Link to="/" style={{ color: "white"}}>
                            HOME
                        </Link>
                         </Menu.Item>

                        {/* <SubMenu style={{ color: "white", fontSize: "12px", fontWeight:"500" }} key="SubMenu" title={(() =>
                            <>
                                ONLINE SHOP{" "}<DownOutlined />
                            </>
                        )()} >
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu> */}
                        <Menu.Item style={{ color: "white", fontSize: "12px", fontWeight:"500" }} key="alipay">
                            <a onClick={()=>window.scrollTo(0,document.body.scrollHeight)} style={{ color: "white" }}  target="_blank" rel="noopener noreferrer">
                                CONTACT
            </a>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row >




        );
    }
}


export default Menubar
