import React, { useState } from "react";
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";

  
import './NavItems.scss'


function NavItems() {
    const [appData, setAppData] = useState({
        collapsed: false,
        appLogo: '/favicon.png'
    })

    const onCollapse = () => {
        setAppData({
            collapsed: !appData.collapsed,
            appLogo: !appData.collapsed ? '/FOL_square.png' : '/favicon.png'
        })
    }

    return (
        <Sider collapsible collapsed={appData.collapsed} onCollapse={onCollapse} style={{ padding: '60px 0 0 0' }}>
            <a href="/">
                <div className="logo">
                    <img src={appData.appLogo} />
                </div>
            </a>
            <Menu theme="dark" defaultSelectedKeys={[getSelectedItem()]} mode="inline">

                <Menu.Divider className="main-menu-divider-all" />

                <Menu.Item key="1" icon={<Icon component={() => (<img src="/account.png" />)} />}>
                    CUENTA
                    <Link to="/my-account" />
                </Menu.Item>

                <Menu.Divider className="main-menu-divider-middle" />

                <Menu.Item key="2" icon={<Icon component={() => (<img src="/FOL_square_mini.png" />)} />}>
                    TOKEN SALE
                    <Link to="/token-sale" />
                </Menu.Item>

            </Menu>
        </Sider>
    );
}

function getSelectedItem() {
    return {
        '/': '1',
        '/my-account': '1',
        '/token-sale': '2'  
    }[useLocation().pathname]
}

export default useNavigate(NavItems)

    