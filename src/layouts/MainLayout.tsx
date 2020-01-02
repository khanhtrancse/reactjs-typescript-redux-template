import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteConfig } from '../config/routes';
import { Header as CustomHeader, MenuNav } from '../components';

const { Content, Header } = Layout;
interface PropsType {
  routes: RouteConfig[];
}

export class MainLayout extends React.Component<PropsType, {}> {
  render(): JSX.Element {
    return (
      <Layout>
        <Header>
          <CustomHeader />
        </Header>
        <Layout>
          <div className="container">
            <div className="layout">
              <MenuNav />
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
          </div>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    );
  }
}
