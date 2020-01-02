import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const { SubMenu } = Menu;
export class MenuNav extends React.Component {
  state = {
    current: 'dashboard',
    activeClass: null,
  };

  handleClick: (e) => void = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  componentDidMount(): void {
    window.addEventListener('scroll', () => {
      let activeClass;
      if (window.scrollY < 80) {
        activeClass = false;
      } else {
        activeClass = true;
      }
      this.setState({ activeClass });
    });
  }

  render(): JSX.Element {
    return (
      <div
        id="menuHeader"
        className={classnames({
          sticky: this.state.activeClass,
          container: true,
        })}
      >
        <Menu
          className="menu-nav"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="dashboard">
            <Link to={'/'}>Dashboard</Link>
          </Menu.Item>
          <SubMenu
            title={<span className="submenu-title-wrapper">Wallet</span>}
          >
            <Menu.ItemGroup>
              <Menu.Item key="deposit">
                <Link to={'/wallet/deposit'}>Deposit</Link>
              </Menu.Item>
              <Menu.Item key="withdraw">
                <Link to={'/wallet/withdraw'}>Withdraw</Link>
              </Menu.Item>
              <Menu.Item key="transfer">
                <Link to={'/wallet/transfer'}>Transfer</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <Menu.Item key="package">
            <Link to={'/package'}>Package</Link>
          </Menu.Item>
          <Menu.Item key="subscription">
            <Link to={'/subscription'}>Subscription</Link>
          </Menu.Item>
          <Menu.Item key="commission">
            <Link to={'/commission'}>Commission</Link>
          </Menu.Item>

          <SubMenu
            title={<span className="submenu-title-wrapper">Network</span>}
          >
            <Menu.ItemGroup>
              <Menu.Item key="link">
                <Link to={'/network/link'}>Link</Link>
              </Menu.Item>
              <Menu.Item key="binary">
                <Link to={'/network/binary'}>Binary</Link>
              </Menu.Item>
              <Menu.Item key="investor">
                <Link to={'/network/investor'}>Investor</Link>
              </Menu.Item>
              <Menu.Item key="customer">
                <Link to={'/network/customer'}>Customer</Link>
              </Menu.Item>
              <Menu.Item key="enterprise">
                <Link to={'/network/enterprise'}>Enterprise</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="profile">
            <Link to={'/profile'}>Profile</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
