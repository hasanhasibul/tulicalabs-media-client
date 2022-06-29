import React, { useEffect, useState } from 'react';
import DefaultLayout from './../../Components/DefaultLayout/DefaultLayout';
import { Space, Table, Modal } from 'antd';
import './index.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { successNotificationWithIcon } from '../../Components/Notifications';
import exportFromJSON from 'export-from-json'
const { confirm } = Modal;

// http://localhost:5000/api/v1

const ViewStudent = () => {
    const [loadData, setLoadData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/viewStudent')
            .then(res => {
                setLoadData(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const columns = [
        {
            title: "ID'V",
            dataIndex: "rowKey",
            width: 100,
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'dob',
        },
        {
            title: 'School',
            dataIndex: 'school',
        },
        {
            title: 'Class',
            dataIndex: 'sclass',
        },

        {
            title: 'Division',
            dataIndex: 'division',
        },

        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: '',
            render: (record) => {
                return (
                    <Space size="middle">
                        <Link to={`/${record._id}`} >Edit</Link>
                        <a style={{ textDecoration: 'underline', color: '#0d6efd' }} onClick={() => showDeleteConfirm(record._id)} >Delete</a>
                    </Space>
                );
            }

        }
    ];



    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this item ?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                axios.post("http://localhost:5000/api/v1/deleteStudent", { id })
                    .then(res => {
                        navigate(0)
                        successNotificationWithIcon('success', 'added success')
                    })
                    .catch((error) => {
                        successNotificationWithIcon('warning', 'something is worng ')
                    })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };


    const downloadCsv = () => {
        const data = loadData
        const fileName = 'download'
        const exportType = exportFromJSON.types.csv
        exportFromJSON({ data, fileName, exportType })
    }

    return (
        <DefaultLayout>
            <div className="add-form">
                <h5 className='h5 text-color'>View Student</h5>
                <Table
                    columns={columns}
                    dataSource={loadData}
                    loading={loading}
                    rowClassName={(record, index) => index % 2 !== 1 ? 'table-row-style' : 'table-row-style-second'}
                    pagination={{
                        pageSize: 10,
                    }}
                // scroll={{
                //     y: 340,

                // }}
                />

                <button onClick={downloadCsv} className="download-excel-button">Download Excel </button>
            </div>


        </DefaultLayout>
    );
};

export default ViewStudent;