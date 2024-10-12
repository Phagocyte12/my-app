import React from 'react'
import { Tag, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { closeTab, setCurrentMenu } from '../../store/reducers/tab'
import './index.css'

const CommonTag = () => {
  const tabList = useSelector((state) => state.tab.tabList)
  const currentMenu = useSelector((state) => state.tab.currentMenu)
  const dispatch = useDispatch()
  const action = useLocation()
  const navigate = useNavigate()

  console.log(tabList)

  const handleClose = (tag, index) => {
    let length = tabList.length - 1
    dispatch(closeTab(tag))
    // 关闭不是当前tag
    if (tag.path !== action.pathname) {
      return
    }
    //  关闭当前tag
    if (index === length) {
      // 设置当前数据
      const curDate = tabList[index - 1]
      dispatch(setCurrentMenu(curDate))
      // 路由跳转
      navigate(curDate.path)
    } else {
      // 如果 tag 存在至少一个数据，则选择最后一个 tag
      if (tabList.length > 1) {
        // 下一个 tag
        const nextData = tabList[index + 1]
        dispatch(setCurrentMenu(nextData))
        navigate(nextData.path)
      }
    }
  }
  // 点击 tag
  const handleChange = (tag) => {
    dispatch(setCurrentMenu(tag))
    navigate(tag.path)
  }
  //   tag显示
  const setTag = (flag, item, index) => {
    return flag ? (
      <Tag color="#55acee" closeIcon onClose={() => handleClose(item, index)} key={item.name}>
        {item.label}
      </Tag>
    ) : (
      <Tag onClick={() => handleChange(item)} key={item.name}>
        {item.label}
      </Tag>
    )
  }
  return (
    <Space className="common-tag" size={[0, 8]} wrap>
      {/* <Tag>首页</Tag>
      <Tag color="#55acee" closeIcon onClose={() => handleClose()}>
        徒弟列表
      </Tag> */}
      {currentMenu.name && tabList.map((item, index) => setTag(item.path === currentMenu.path, item, index))}
    </Space>
  )
}

export default CommonTag
