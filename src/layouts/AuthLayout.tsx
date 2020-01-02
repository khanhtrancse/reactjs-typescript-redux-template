import React from 'react';
import { Row, Col, Layout, Card } from 'antd';
import logo from '../assets/images/logo/logo.png';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteConfig } from '../config/routes';

const { Content } = Layout;
interface PropsType {
  routes: RouteConfig[];
}

export class AuthLayout extends React.Component<PropsType, {}> {
  render(): JSX.Element {
    return (
      <div className="container">
        <Row>
          <Col xs={24} md={{ span: 8, offset: 8 }}>
            <div className="aff_dashboard">
              <Card bordered={false}>
                <div className="logo_login mb-50 text-center">
                  <img src={logo} alt="images logo"></img>
                </div>
                <div className="auto-center">
                  <Content>
                    <Switch>
                      {this.props.routes.map((item) => (
                        <Route
                          key={item.path}
                          path={item.path}
                          component={item.component}
                        />
                      ))}

                      {this.props.routes.length > 0 ? (
                        <Redirect to={this.props.routes[0].path} />
                      ) : null}
                    </Switch>
                  </Content>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
