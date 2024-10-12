import React from 'react'
import { Button, Layout, Avatar, Dropdown } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'

import './index.css'
import { useDispatch } from 'react-redux'
import { collapseMenu } from '../../store/reducers/tab'
import { useNavigate } from 'react-router-dom'

const { Header } = Layout

const CommonHeader = ({ collapsed }) => {
  const navigate = useNavigate()
  // 退出
  const logout = () => {
    // 清除token
    localStorage.removeItem('token')
    navigate('/login')
  }

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          个人中心
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a onClick={() => logout()} target="_blank" rel="noopener noreferrer">
          退出
        </a>
      )
    }
  ]
  // 创建钩子dispatch
  const dispatch = useDispatch()
  // 点击展开收起按钮
  const setCollapsed = () => {
    console.log(collapsed, 'commonHeader')
    dispatch(collapseMenu())
  }
  return (
    <Header className="header-container">
      <Button
        type="text"
        icon={<MenuFoldOutlined />}
        style={{
          fontSize: '16px',
          width: 64,
          height: 32,
          backgroundColor: '#fff'
        }}
        onClick={() => {
          setCollapsed()
        }}
      />

      <Dropdown menu={{ items }}>
        <Avatar size={50} src={<img src={require('../../assets/fll.png')} />} />
      </Dropdown>
    </Header>
  )
}

export default CommonHeader
