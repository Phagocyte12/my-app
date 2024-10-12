import Mock from 'mockjs'

// 图表数据
let List = []

export default {
  getStatisticaData: () => {
    // mock.random.float
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          王都: Mock.Random.float(100, 8000, 0, 0),
          剑之乡: Mock.Random.float(100, 8000, 0, 0),
          魔王城: Mock.Random.float(100, 8000, 0, 0),
          黄金乡: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '王都',
            value: 29991
          },
          {
            name: '剑之乡',
            value: 29991
          },
          {
            name: '魔王城',
            value: 29999
          },
          {
            name: '黄金乡',
            value: 30000
          }
        ],
        // 柱状图
        userData: [
          {
            new: 5,
            active: 200,
            date: '周一'
          },
          {
            new: 10,
            active: 500,
            date: '周二'
          },
          {
            new: 12,
            active: 800,
            date: '周三'
          }
        ],
        // 折线图
        orderData: {
          date: ['20240101', '20240102', '20240103', '20240104', '20240105', '20240106'],
          data: List
        },
        tableData: [
          {
            name: '魔王',
            todayBuy: 500,
            monthBuy: 5000,
            totalBuy: 3000
          },
          {
            name: '芙莉莲',
            todayBuy: 1500,
            monthBuy: 15000,
            totalBuy: 13000
          }
        ]
      }
    }
  }
}
