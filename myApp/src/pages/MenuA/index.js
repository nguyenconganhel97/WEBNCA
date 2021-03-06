import React, { useState, useRef } from 'react';
import { Radio } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Modal } from 'antd';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Descriptions, Badge } from 'antd';
import { Divider } from 'antd';
import $ from 'jquery';
import { ADD_NEW_NOTE } from "../../const/index.js";

import { Provider } from "react-redux";
import { createStore } from "redux";

//Import kết nối tới react-redux
import { connect } from 'react-redux'
//Import action dùng để dispatch
import { actAddNote } from '../../actions/index';



const { Header, Content, Sider } = Layout;


const { Search } = Input;



//Gọi reducers
import reducers from "../../reducers/index";
//Tạo store
const store = createStore(reducers);

//Gán dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (content) => {
      dispatch(actAddNote(content))
    }
  }
}

//Gán giá trị của state thành props
const mapStateToProps = (state, ownProps) => {
  return {
    note: state.note
  }
}




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
    // $.get({
    //   url: "https://192.168.1.153:9446/ibm/iis/igc-rest/v1/search/?types=term&text=Customer&search-properties=name",
    //   headers: {
    //     'Authorization': 'Basic aXNhZG1pbjpmc3M='
    //   },
    //   dataType: "JSON",
    //   // jsonpCallback: 'callback',
    //   success: function func(json) {
    //     alert(json.name);
    //   }
    // });

    // $.ajaxSetup({
    //   crossDomain: true,
    //   xhrFields: {
    //     withCredentials: true
    //   }
    // });
    // var settings = {
    //   "crossDomain": true,
    //   "xhrFields" : {
    //     "withCredentials": true
    //   },
    //   "url": "https://192.168.1.153:9446/ibm/iis/igc-rest/v1/search/?types=term&text=Customer&search-properties=name",
    //   "method": "GET",
    //   "timeout": 0,
    //   "headers": {
    //     "Authorization": "Basic aXNhZG1pbjpmc3M=",
    //   },
    // };

    // $.ajax(settings).done(function (response) {
    //   console.log("LOG1", response);
    // });


    axios.get("https://5d984cdf61c84c00147d6e6f.mockapi.io/DemoClass").then((response) => {
      getData(response.data);
      response.data
    });

  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (dom, entity) => {
        return <a onClick={() => {
          setShow(true);
          setRowChil(entity);

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


    <Provider store={store}>

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
          <div>
            <Radio.Group >
              <Radio value={1}>Term</Radio>
            </Radio.Group>
            <Radio.Group >
              <Radio value={2}>Category</Radio>
            </Radio.Group>
          </div>
        </div>
        <Divider dashed />
        <Table dataSource={dataTable} columns={columns} />
        <Drawer
          title="Details"
          width={720}
          onClose={close}
          visible={show}
          bodyStyle={{ paddingBottom: 80 }}
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






    </Provider>



  );
};

export default MenuA;
// export default connect(mapStateToProps, mapDispatchToProps)(MenuA)