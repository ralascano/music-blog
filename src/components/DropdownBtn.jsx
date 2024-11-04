import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const DropdownBtn = ({setSelectData}) => {
  
const items = [
  {
    label: <a onClick={() => {getType("kpop")}}>K-Pop</a>,
    key: '0',
  }
];


  const getType = (value) => {
    //console.log("value", value)
    setSelectData(value);
  } 
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()} style={{cursor: "pointer"}}>
      <Space>
        Select the genre
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  )
}

export default DropdownBtn
