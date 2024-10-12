import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Table } from 'antd'
import * as Icon from '@ant-design/icons'
import './home.css'
import { getData } from '../../api'
import MyEcharts from '../../componets/Echarts'

// table列头数据
const columns = [
  {
    title: '考试用户',
    dataIndex: 'name'
  },
  {
    title: '今日战绩',
    dataIndex: 'todayBuy'
  },
  {
    title: '本月战绩',
    dataIndex: 'monthBuy'
  },
  {
    title: '总战绩',
    dataIndex: 'totalBuy'
  }
]
// num 数据
const countData = [
  {
    name: '芙莉莲今日战绩',
    value: 1200,
    icon: 'CheckCircleOutlined',
    color: '#2ec7c9'
  },
  {
    name: '菲伦今日战绩',
    value: 1000,
    icon: 'CheckCircleOutlined',
    color: '#ffb980'
  },
  {
    name: '魔王今日战绩',
    value: 100,
    icon: 'CheckCircleOutlined',
    color: '#5ab1ef'
  },
  {
    name: '辛美尔今日战绩',
    value: 1200,
    icon: 'CheckCircleOutlined',
    color: '#2ec7c9'
  },
  {
    name: '辛美尔今日战绩',
    value: 1200,
    icon: 'CheckCircleOutlined',
    color: '#ffb980'
  },
  {
    name: '辛美尔今日战绩',
    value: 1200,
    icon: 'CheckCircleOutlined',
    color: '#5ab1ef'
  }
]

const iconToElement = (name) => React.createElement(Icon[name])
const Home = () => {
  const userImg = require('../../assets/fll.png')
  // echarts相应数组
  const [echartData, setEchartData] = useState({})
  // 钩子函数 [] 代表只加载一次
  useEffect(() => {
    getData().then(({ data }) => {
      console.log(data, 'data')
      // 解构 tableData
      const { tableData, orderData, userData, videoData } = data.data
      setTableData(tableData)
      // echarts
      const order = orderData
      // x数据
      const xData = order.date
      // series 数据
      const keyArray = Object.keys(order.data[0])
      const series = []
      keyArray.forEach((key) => {
        series.push({
          name: key,
          data: order.data.map((item) => item[key]),
          type: 'line'
        })
      })

      setEchartData({
        order: {
          xData,
          series
        },
        user: {
          xData: userData.map((item) => item.date),
          series: [
            { name: '战斗用户', data: userData.map((item) => item.new), type: 'bar' },
            { name: '战斗值', data: userData.map((item) => item.active), type: 'bar' }
          ]
        },
        video: {
          series: [
            {
              data: videoData,
              type: 'pie'
            }
          ]
        }
      })
    })
  }, [])

  // 定义table 数据
  const [tableData, setTableData] = useState([])

  return (
    <Row className="home">
      <Col span={8}>
        <Card hoverable>
          <div className="user">
            <img src={userImg} />
            <div className="userinfo">
              <p className="name">Admin</p>
              <p className="access">超级管理员</p>
            </div>
          </div>
          <div className="login-info">
            <p>
              上次登录的时间:<span>辛美尔死后150年</span>
            </p>
            <p>
              上次登录的地点:<span>菲伦参加考试地点</span>
            </p>
          </div>
        </Card>
        <Card>
          <Table bordered tableLayout="fixed" rowKey="name" columns={columns} dataSource={tableData} pagination={false} />
        </Card>
      </Col>
      <Col span={16}>
        <div className="num">
          {countData.map((item, index) => {
            return (
              <Card key={index}>
                <div className="icon-box" style={{ background: item.color }}>
                  {iconToElement(item.icon)}
                </div>
                <div className="detail">
                  <p className="num">${item.value}</p>
                  <p className="txt">{item.name}</p>
                </div>
              </Card>
            )
          })}
        </div>
        {echartData.order && <MyEcharts charData={echartData.order} style={{ height: '280px' }} />}

        <div className="graph">
          {echartData.user && <MyEcharts charData={echartData.user} style={{ height: '240px', width: '50%' }} />}
          {echartData.video && <MyEcharts charData={echartData.video} isAxisChart={false} style={{ height: '260px', width: '50%' }} />}
        </div>
      </Col>
    </Row>
  )
}

export default Home
