import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import { userAction } from '../../actions/user';
import { push } from 'connected-react-router';
import { routeName } from '../../config/route-name';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  changeFields: userAction.changeFields,
  goToPage: push,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export class LoginScreen extends React.Component<PropsFromRedux, {}> {
  handleSubmit: (e) => void = (e) => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
    this.props.changeFields({ _id: 'adfasdf' });
    this.props.goToPage(routeName.dashboard);
  };

  render(): JSX.Element {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
