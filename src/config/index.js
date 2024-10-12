export default [
  {
    path: 'home',
    name: 'home',
    label: '首页',
    icon: 'AliwangwangOutlined',
    url: '/home/index'
  },
  {
    path: '/mall',
    name: 'mall',
    label: '宝箱管理',
    icon: 'CrownOutlined',
    url: '/mall/index'
  },
  {
    path: '/user',
    name: 'user',
    label: '徒弟管理',
    icon: 'RedditOutlined',
    url: '/user/index'
  },
  {
    path: '/other',
    label: '其他',
    icon: 'SettingOutlined',
    children: [
      {
        path: '/other/pageOne',
        name: 'page1',
        label: '页面1',
        icon: 'SettingOutlined'
      },
      {
        path: '/other/pageTwo',
        name: 'page2',
        label: '页面2',
        icon: 'SettingOutlined'
      }
    ]
  }
]
