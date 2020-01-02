import React from 'react';
import { Row, Col, Menu, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import userIMG from '../assets/images/user.png';

interface UserMenuPropsTypes {
  name: string;
  description?: string;
}
const UserMenu: React.FC<UserMenuPropsTypes> = (props: UserMenuPropsTypes) => (
  <Menu>
    <div className="header-menu">
      <div className="card-user">
        <div className="img-user">
          <img src={userIMG} alt="images user"></img>
        </div>
        <div className="detail-user">
          <span>
            {props.name}
            {props.description ? <br /> : null}
            {props.description}
          </span>
        </div>
      </div>
    </div>
    <Menu.Item key="0">
      <Link to={'/profile'}>My Profile</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to={'/change_password'}>ChangePassword</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link to={'/login'}>Logout</Link>
    </Menu.Item>
  </Menu>
);

export class Header extends React.Component {
  render(): JSX.Element {
    return (
      <div className="container">
        <Row type="flex" justify="space-between">
          <Col span={4}>
            <img className="logo" src={logo} />
          </Col>
          <Col span={20} className="text-right">
            <Dropdown
              overlay={<UserMenu name="Khanh" description="ADFASDFSDAF" />}
              trigger={['click']}
            >
              <a className="ant-dropdown-link" href="#">
                <Avatar size="large" icon="user" /> Admin
              </a>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }
}
