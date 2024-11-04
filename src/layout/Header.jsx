import React, { useEffect, useState } from 'react'
import logo from "../assets/logo-w.png"
import DropdownBtn from '../components/DropdownBtn'
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const Header = ({setSelectData, selectData, setLang, lang}) => {
  
    const items = [
        {
          label: <span onClick={() => {setLang("es")}}>Español</span>,
          key: '0',
        },
        {
          label: <span onClick={() => {setLang("en")}}>English</span>,
          key: '1',
        }
      ];

    useEffect(() => {
        console.log("selectData", selectData)
    }, [selectData])
  return (
    <header className='header'>
        <div className='header-aboutme'>
           <div className='header-aboutme-nav'>
                <a href="">{lang === "en" ? "About me" : "Sobre mí"}</a>
                <a href="">FaQ's</a>
           </div>
           <div>
           <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()} style={{cursor: "pointer"}}>
                <Space>
                    Change Language {lang === 'en' ? <span className="fi fi-us" style={{fontSize: "20px"}}/> : <span className="fi fi-es" style={{fontSize: "20px"}}/>}
                <DownOutlined />
                </Space>
            </a>
            </Dropdown>
           </div>
        </div>
        <div className='header-menu'>
            <div className='header-menu-left'>
                <img src={logo} alt=""/>
                <h1>                    
                    Musical Blog Opinion
                </h1>
            </div>
            <div className='header-menu-right'>
                    <DropdownBtn setSelectData={setSelectData}/>
                    <a href="">FaQ's</a>
            </div>
        </div>
  </header>
  )
}

export default Header
