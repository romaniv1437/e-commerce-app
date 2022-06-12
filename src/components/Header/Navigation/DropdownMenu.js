import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import 'antd/dist/antd.min.css';
import React from 'react';
import {NavLink} from "react-router-dom";

const DropdownMenu = (props) => {

    const discovery_items = props.discovery_items.map(item => { return {
        label: (
            <NavLink onClick={props.closeMenu} to={`/discovery/${item.name.toLowerCase()}`}>
                <p>{item.name}</p>
            </NavLink>
        ),
            key: `${item.id}`
    }})
    const menu = (
        <Menu items={discovery_items}/>
    );
    return <Dropdown overlay={menu}>
        <NavLink to='/discovery'>
            <Space>
                Discovery
                <DownOutlined />
            </Space>
        </NavLink>
    </Dropdown>
};

export default DropdownMenu;