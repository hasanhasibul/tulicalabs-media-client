import React from 'react';
import Header from './../Header/Header';
import './DefaultLayout.css'

import { UsergroupAddOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;

const DefaultLayout = (props) => {
    return (
        <div style={{ border: '4px solid gray', height: '100vh' }} >
            <Header></Header>
            <div className="layout-container">
                <div className="container-wrap">
                    <Layout>
                        <Layout>
                            <Sider width={220} className=" left-sider site-layout-background">
                                <Menu
                                    mode="inline"
                                    style={{
                                        height: '100%',
                                        borderRight: 0,
                                    }}

                                >
                                    <Menu.SubMenu style={{ borderBottom: '1px solid lightgrey', padding: '10px 0px' }} title="Student">
                                        <Menu.Item className='text-link'>
                                            <Link to="/view-student"> <UsergroupAddOutlined style={{ padding: '0px 6px', fontSize: '15' }} /> View Student</Link>
                                        </Menu.Item>
                                        <Menu.Item className='text-link'>
                                            <Link to="/add-student"><UserAddOutlined style={{ padding: '0px 6px', fontSize: '15' }} /> Add Student</Link>
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                </Menu>
                            </Sider>
                            <Layout
                            >
                                <Content
                                    className="site-layout-background right-sider"
                                >
                                    {
                                        props.children
                                    }
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;