// 封装的请求
export default obj => {
  return new Promise((res, rej) => {
    uni.showLoading()
    uni.request({
      ...obj,
      success: (data) => {
        uni.hideLoading()
        res(data)
      },
      fail: (err) => {
        uni.hideLoading()
        rej(err)
      }
    })
  })
} 