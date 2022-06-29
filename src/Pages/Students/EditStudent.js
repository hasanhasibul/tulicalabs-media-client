import React, { useState, useEffect } from 'react';
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
import { CalendarOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from './../../Components/Spinner';
import { successNotificationWithIcon } from '../../Components/Notifications';
const EditStudent = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [form] = Form.useForm();
    const navigate = useNavigate()
    useEffect(() => {
        axios.post('https://murmuring-springs-62378.herokuapp.com/api/v1/readStudentById', { id })
            .then(response => {
                form.setFieldsValue({
                    name: response.data.data[0].name,
                    // dob: response.data.data[0].dob,
                    sclass: response.data.data[0].sclass,
                    school: response.data.data[0].school,
                    division: response.data.data[0].division,
                    status: response.data.data[0].status,
                });
                setLoading(false)

            })
            .catch((error) => {
                console.log(error);
            })
    }, []
    )
    const onFinish = (values) => {

        axios.post('https://murmuring-springs-62378.herokuapp.com/api/v1/updateStudent', values)
            .then(res => {
                setLoading(false)
                successNotificationWithIcon('success', 'Updated success')
                navigate('/view-student')
            })
            .catch((error) => {
                console.log(error);
            })
    };



    return (
        <DefaultLayout>
            <div className="add-form">
                <h5 className='p-4'>Add Student</h5>
                {
                    loading ? <Spinner />
                        :
                        <Form
                            form={form}
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
                            {/* <Form.Item name="dob" label="DatePicker">
                        <DatePicker suffixIcon={false} className='from-field-style' /> <CalendarOutlined style={{ fontSize: '26px', color: 'grey' }} />
                    </Form.Item > */}
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
                                    Update
                                </Button>

                            </Form.Item>

                        </Form>
                }
            </div>
        </DefaultLayout>
    );
};

export default EditStudent;