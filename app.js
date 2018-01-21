//app.js
App({
  /**
   * 全局数据
   */
  globalData: {},
  /**
   * 当小程序初始化完成时，（全局只触发一次）
   */
  onLaunch: function () {
    const user = wx.getStorageSync("user")
    if (!user) {
      wx.reLaunch({
        url: '/pages/signIn/type/type'
      })
    }
  },
  /**
   * 公用请求方法
   */
  fetch: function ({ method = "GET", url, data }) {
    wx.showNavigationBarLoading()
    const host = "http://test.api.hx.icestargroup.com/v1/";
    return new Promise(function (resolve, reject) {
      wx.request({
        method: method,
        url: host + url,
        data: data,
        success: resolve,
        fail: reject,
        complete: wx.hideNavigationBarLoading
      })
    })
  }
})