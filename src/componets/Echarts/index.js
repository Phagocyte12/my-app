import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const axisOption = {
  textStyle: {
    color: '#3333'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: [],
    axisLine: {
      lineStyle: {
        color: '#17b3a3'
      }
    },
    axisLabel: {
      interval: 0,
      color: '#333'
    }
  },
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#17b3a3'
        }
      }
    }
  ],
  color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3'],
  series: []
}

const normalOption = {
  tooltip: {
    trigger: 'item'
  },
  color: ['#0f78f4', '#dd536b', '#9462e5', '#e1bb2', '#39c362', '#3ed1cf'],
  series: []
}

const Echats = ({ style, charData, isAxisChart = true }) => {
  // 获取dom实例
  const echartRef = useRef()
  let echartObj = useRef(null)
  useEffect(() => {
    let options
    // echart的初始化
    echartObj.current = echarts.init(echartRef.current)
    // 设置option
    if (isAxisChart) {
      axisOption.xAxis.data = charData.xData
      axisOption.series = charData.series
      options = axisOption
    } else {
      normalOption.series = charData.series
      options = normalOption
    }
    echartObj.current.setOption(options)
  }, [charData])
  return <div style={style} ref={echartRef}></div>
}

export default Echats
