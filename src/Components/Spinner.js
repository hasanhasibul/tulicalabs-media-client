import { Spin, Space } from 'antd';
import React from 'react';
import './Spinner.css'
const Spinner = () => {
    return (
        <div className='spinner' >
            <Space size="middle">
                <Spin />
            </Space>
        </div>
    );
};

export default Spinner;