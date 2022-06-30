import React from "react";
import Style from "./style.module.scss";
import { Form } from "antd";
import { Button, Input } from "antd";
import { inject, observer } from "mobx-react";
import _ from "lodash";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  Style: {
    color: "#6b6c71",
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

@inject("userStore")
@observer
class Registry extends React.Component {
  state = {
    loading: false,
    success: false,
  };

  handleSubmit = (values) => {
    this.setState({
      loading: true,
    });
    this.props.userStore
      .registry(values)
      .then(() => {
        this.setState({
          loading: false,
          success: true,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  };

  handleBackToLogin = (e) => {
    e.preventDefault();
    this.props.onSwitch("email");
  };

  handleNameValidator = _.debounce((rule, value, callback) => {
    this.props.userStore
      .checkUserName(value)
      .then((data) => {
        if (data.exist) {
          callback(`${value} 已经存在`);
        } else {
          callback();
        }
      })
      .catch((err) => {
        callback();
      });
  }, 400);

  handleEmailValidator = _.debounce((rule, value, callback) => {
    this.props.userStore
      .checkUserEmail(value)
      .then((data) => {
        if (data.exist) {
          callback(`${value} 已经存在`);
        } else {
          callback();
        }
      })
      .catch((err) => {
        callback();
      });
  }, 400);

  render() {
    const { loading, success } = this.state;
    if (success) {
      return (
        <div className={Style.email_login}>
          <div className={Style.registry_success}>
            <span>注册成功,</span>
            <a onClick={this.handleBackToLogin}>请登录</a>
          </div>
        </div>
      );
    }
    return (
      <div className={Style.email_login}>
        <Form onFinish={this.handleSubmit}>
          <Form.Item
            label="昵称"
            name="name"
            rules={[
              {
                required: true,
                message: "昵称为空",
              },
              {
                validator: this.handleNameValidator,
              },
            ]}
            {...formItemLayout}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮件"
            name="email"
            rules={[
              {
                required: true,
                message: "邮件为空",
              },
              {
                validator: this.handleEmailValidator,
              },
            ]}
            {...formItemLayout}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "用户名为空",
              },
            ]}
            {...formItemLayout}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={loading}>
              注册
            </Button>
          </Form.Item>
        </Form>
        <div>
          <span>
            <span>已有账号，</span>
            <a onClick={this.handleBackToLogin}>直接登陆</a>
          </span>
        </div>
      </div>
    );
  }
}

@inject("userStore")
@observer
class Email extends React.Component {
  state = {
    loading: false,
  };

  handleSubmit = (values) => {
    this.setState({
      loading: true,
    });
    console.log(this.props);
    this.props.userStore
      .auth(values)
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  };

  handleRegistry = (e) => {
    e.preventDefault();
    this.props.onSwitch("registry");
  };

  render() {
    const { loading } = this.state;
    return (
      <div className={Style.email_login}>
        <Form onFinish={this.handleSubmit}>
          <Form.Item
            label="用户名"
            name="email"
            rules={[
              {
                required: true,
                message: "用户名为空",
              },
            ]}
            {...formItemLayout}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "用户名为空",
              },
            ]}
            {...formItemLayout}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            // label=""
            style={{ textAlign: "center" }}
          >
            <Button type="primary" htmlType="submit" loading={loading}>
              登陆
            </Button>
          </Form.Item>
        </Form>
        <div>
          <span>
            <span>没有账号？</span>
            <a onClick={this.handleRegistry}>注册</a>
          </span>
        </div>
      </div>
    );
  }
}

@inject("userStore")
@observer
class Login extends React.Component {
  state = {
    loading: false,
    method: "email",
  };

  loginGithub = () => {
    window.location.href = "https://github.com/login/oauth/authorize?client_id=d73efcb85cf7cee16dea&scope=user";
  };

  getLoginMethod = () => {
    const props = {
      onSwitch: this.handleMainChange,
    };
    switch (this.state.method) {
      case "email":
        return <Email {...props} />;
      case "registry":
        return <Registry {...props} />;
    }
  };

  handleLogin = (data) => {
    this.props.userStore.auth(data);
  };

  handleMainChange = (value) => {
    this.setState({
      method: value,
    });
  };

  render() {
    return (
      <div className={Style.login}>
        <div>
          <h2>登陆</h2>
        </div>
        <div className={Style.content}>
          <div className={Style.main}>{this.getLoginMethod()}</div>
          <div className={Style.methods}>
            <h3>快速登录</h3>
            <div className={Style.list}>
              <button onClick={this.loginGithub}>
                <span className={Style.github_icon}></span>
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
