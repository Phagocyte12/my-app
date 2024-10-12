import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission'

// Mock.mock(/home\/getData/, function () {
//   console.log('拦截接口home')
// })

Mock.mock(/home\/getData/, homeApi.getStatisticaData)
Mock.mock(/user\/getUser/, userApi.getUserList)

Mock.mock(/user\/addUser/, 'post', userApi.createUser)
Mock.mock(/user\/editUser/, 'post', userApi.updateUser)

Mock.mock(/user\/delUser/, 'post', userApi.deleteUser)

Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)