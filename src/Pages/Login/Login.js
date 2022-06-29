import { Button, Checkbox, Form, Input } from 'antd';
import './Login.css';
import axios from 'axios'
import { successNotificationWithIcon } from '../../Components/Notifications';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const Login = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    axios.post('https://murmuring-springs-62378.herokuapp.com/api/v1/userLogin', values)
      .then(response => {
        localStorage.setItem("email", response.data.data[0].email);
        navigate('/')
        successNotificationWithIcon('success', 'Login Success')
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <div className="container-div">
      <Header></Header>
      <Form
        name="normal_login"
        className="login-form form-container"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h4 className='form-heading-text text-center' >Sign In Now</h4>
        <Form.Item
          className=''
          name="username"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder="Your Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            type="password"
            placeholder="Your Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>I agree to the terms and services</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="login-form-button">
            Sign In
          </Button>
          Don't have an account ?  <Link to='/sign-up' >Sign Up</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;