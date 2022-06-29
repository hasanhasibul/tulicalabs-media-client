import { Button, Checkbox, Form, Input } from 'antd';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import { successNotificationWithIcon } from '../../Components/Notifications';
import Header from '../../Components/Header/Header';
const SignUp = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        axios.post('https://murmuring-springs-62378.herokuapp.com/api/v1/createUser', values)
            .then(response => {
                navigate('/login')
                successNotificationWithIcon('success', 'Sign Up Success')
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
                <h4 className='form-heading-text text-center' >Sign Up Now</h4>
                <Form.Item
                    name="email"
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
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input
                        type="password"
                        placeholder="Your Password"
                    />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('password do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input
                        type="password"
                        placeholder="confirm Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>I agree to the terms and services</Checkbox>
                    </Form.Item>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="login-form-button">
                        Sign up
                    </Button>
                    have an account ? <Link to="/sign-in" >Sign In</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUp;