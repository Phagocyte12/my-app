import React from 'react'
import { Layout, theme } from 'antd'
import CommonAside from '../componets/commonAside'
import CommonHeader from '../componets/commonHeader'
import CommonTag from '../componets/commonTag'

import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import RouterAuth from '../router/routerAuth'

const layoutStyle = {
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
  minHeight: '100vh'
}

const { Content } = Layout

const Main = () => {
  // const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  // 获取收起展开状态
  const collapsed = useSelector((state) => state.tab.isCollapse)

  return (
    <RouterAuth>
      <Layout style={layoutStyle}>
        <CommonAside collapsed={collapsed} />
        <Layout>
          <CommonHeader collapsed={collapsed} />
          <CommonTag />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </RouterAuth>
  )
}

export default Main
