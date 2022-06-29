import React, { useState } from 'react';
import DefaultLayout from '../../Components/DefaultLayout/DefaultLayout';
import './index.css'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    DatePicker,

} from 'antd';
import axios from 'axios'
import Spinner from '../../Components/Spinner';
import { successNotificationWithIcon } from '../../Components/Notifications';
import { useNavigate } from 'react-router-dom';


const AddStudents = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onFinish = (values) => {
        setLoading(true)
        axios.post('http://localhost:5000/api/v1/addStudent', values)
            .then(res => {
                setLoading(false)
                successNotificationWithIcon('success', 'added success')
                navigate('/view-student')
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <DefaultLayout>
            <div className="add-form">
                <h5 className='p-4 text-color' >Add Student</h5>
                {
                    loading ? <Spinner /> : <Form

                        name="normal_login"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 5 }}
                        layout="horizontal"
                        labelAlign="left"
                        colon="false"
                        onFinish={onFinish}
                    >
                        <Form.Item name="name" label="Full Name">
                            <Input placeholder='Name' className='from-field-style' />
                        </Form.Item>
                        <Form.Item name="dob" label="DatePicker">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item name="school" label="School">
                            <Select placeholder="Select">
                                <Select.Option value="RUT High School">RUT High School</Select.Option>
                                <Select.Option value="RDM Pitol">RDM Pitol </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="sclass" label="Class">
                            <Select placeholder="Select">
                                <Select.Option value="Ten">Class X</Select.Option>
                                <Select.Option value="Nine">Class IX </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="division" label="Divison">
                            <Select placeholder="Select">
                                <Select.Option value="Dhaka">Dhaka</Select.Option>
                                <Select.Option value="Chittagong">Chittagong </Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="status" label="Status">
                            <Radio.Group >
                                <Radio value="Active"> Active </Radio>
                                <Radio value="Inactive"> Inactive </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item className='justify-content-center'  >
                            <Button className='Save-button' htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>

                    </Form>
                }
            </div>
        </DefaultLayout>
    );
};

export default AddStudents;