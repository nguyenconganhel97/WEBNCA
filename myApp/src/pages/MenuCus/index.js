import React, { useState, useRef } from 'react';
import { Radio } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Modal } from 'antd';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Descriptions, Badge } from 'antd';
import { Alert } from 'antd';
import { message, Divider } from 'antd';
const { Header, Content, Sider } = Layout;
// const {  Alert  } = antd;

const { spawn } = require('child_process');
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});
const { Search } = Input;
const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};


const MenuA = () => {
  let [show, setShow] = useState(false)
  let [dataTable, getData] = useState([]);
  let [rowChildren, setRowChil] = useState({});
  let [keySearch, setKey] = useState("");
  function close(params) {
    setShow(false)

  }
  function onChange(e) {
    setKey(e.target.value);
  }
  function onSearch() {



    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['script1.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      dataToSend = data.toString();
      console.log("LOG01",dataToSend);
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      // res.send(dataToSend)
    });




    axios.get("https://5d984cdf61c84c00147d6e6f.mockapi.io/DemoClass").then((response) => {
      getData(response.data);
      response.data
      message.success(
        {
          content: 'Thành công',
          className: '',
          style: {
            float: 'right',
            marginBottom: "10px"
          },
          duration: 2,
          // top : 60
        });
    });

  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (dom, entity) => {
        return <a onClick={() => {
          // setShow(true);
          // setRowChil(entity);

        }
        }>NCA</a>
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];


  return (
    <div>
      <div className="site-layout-background">

        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                onChange={onChange}
                enterButton
                // value = {keySearch}
                style={{ width: 400 }}
              />
            </Col>
          </Row>

        </div>
        <Divider dashed />

        <div style={{ background: "white" }}>
          <Descriptions
            // style = {"width" :"30%"}
            number={3}
            size="small"
            title="Thông tin chung"
            bordered="true">
            <Descriptions.Item label="Mã số khách hàng" span={3}>BAC</Descriptions.Item>
            <Descriptions.Item label="Tên khách hàng" span={3}>1</Descriptions.Item>
            <Descriptions.Item label="Ngày sinh" span={3}>1</Descriptions.Item>
            <Descriptions.Item label="Số điện thoại" span={3}>1</Descriptions.Item>
            <Descriptions.Item label="Địa chỉ email" span={3}>1</Descriptions.Item>
            {/* <Descriptions.Item label="Id" span={3}>1</Descriptions.Item> */}
            {/* <Descriptions.Item label="Name" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item> */}
            {/* <Descriptions.Item label="Name" span={3}>CONGANH</Descriptions.Item> */}
            {/* <Descriptions.Item label="Address" span={3}>Ha Noi</Descriptions.Item> */}
          </Descriptions>
        </div>
      </div>
      <Divider orientation="left"></Divider>

      <Table dataSource={dataTable} columns={columns} />
      {/* <Modal
        title="Basic Modal"
        visible={show}
        // onOk={this.handleOk}
        onCancel={close}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}

      <Drawer
        title="Details"
        width={720}
        onClose={close}
        visible={show}
        bodyStyle={{ paddingBottom: 80 }}
      // footer={
      //   <div
      //     style={{
      //       textAlign: 'right',
      //     }}
      //   >
      //     <Button onClick={this.onClose} style={{ marginRight: 8 }}>
      //       Cancel
      //       </Button>
      //     <Button onClick={this.onClose} type="primary">
      //       Submit
      //       </Button>
      //   </div>
      // }
      >
        <Descriptions title={keySearch} bordered>
          <Descriptions.Item label="Id" span={3}>{rowChildren ? rowChildren.id : ""}</Descriptions.Item>
          {/* <Descriptions.Item label="Name" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item> */}
          <Descriptions.Item label="Name" span={3}>{rowChildren ? rowChildren.name : ""}</Descriptions.Item>
          <Descriptions.Item label="Address" span={3}>{rowChildren ? rowChildren.address : ""}</Descriptions.Item>
        </Descriptions>
      </Drawer>
    </div>
  );
};

export default MenuA;
