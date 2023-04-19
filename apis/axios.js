// 封装的请求
module.exports = obj => {
  return new Promise((res, rej) => {
    uni.showLoading()
    nui.request({
      ...obj,
      success: (data) => {
        uni.hideLoading()
        res(data)
      },
      fail: (err) => {
        nui.hideLoading()
        rej(err)
      }
    })
  })
} 