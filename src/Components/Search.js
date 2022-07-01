import { Button, Form, Input, Radio, Select } from 'antd';
import { useState } from 'react';
import axios from 'axios'
const Search = (props) => {
    const [form] = Form.useForm();
    const setLoadData = props.setLoadData;
    const setLoading = props.setLoading;
    const onFinish = (values) => {
        setLoading(true)
        axios.post('https://murmuring-springs-62378.herokuapp.com/api/v1/searchStudent', values)
            .then(response => {
                setLoadData(response.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }
    return (
        <div className="p-2">
            <Form
                layout='inline'
                form={form}
                onFinish={onFinish}
            >
                <Form.Item name="name">
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item name="age" >
                    <Input placeholder="Age" />
                </Form.Item>

                <Form.Item name="school">
                    <Select placeholder="Select">
                        <Select.Option value="RUT High School">RUT High School</Select.Option>
                        <Select.Option value="RDM Pitol">RDM Pitol </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="sclass">
                    <Select placeholder="Select">
                        <Select.Option value="Ten">Class X</Select.Option>
                        <Select.Option value="Nine">Class IX </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="division">
                    <Select placeholder="Select">
                        <Select.Option value="Dhaka">Dhaka</Select.Option>
                        <Select.Option value="Chittagong">Chittagong </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item  >
                    <Button className='search-button' htmlType="submit"  >Search</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Search;