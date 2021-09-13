import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  HomeOutlined,
  UserAddOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const SidebarMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div style={{width: '20%', height: '100%', background: '#041429'}}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserAddOutlined />}>
            Link Accounts
          </Menu.Item>
          <SubMenu key="sub1" icon={<TeamOutlined />} title="Accounts">
            <Menu.Item key="5">Account x</Menu.Item>
            <Menu.Item key="6">Account x</Menu.Item>
            <Menu.Item key="7">Account x</Menu.Item>
            <Menu.Item key="8">Account x</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
    </div>
  )
}

export default SidebarMenu;
