// pages/signIn/signIn.js
Page({
  /**
   * 提交表单
   */
  formSubmit: function (e) {
    const data = e.detail.value;
    if (!data.phone || data.phone.length !== 11) {
      wx.showModal({
        title: '提示',
        content: '请输入11位手机号',
        showCancel: false
      })
      return false;
    }
    if (!data.password) {
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel: false
      })
      return false;
    }
    wx.setStorageSync('user', '123');
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    type:"",
    title:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const type = options.type;
    let title = '';
    switch (type){
      case "geren":
        title = "个人登陆";
        break;
      case "jp":
        title ="社团登陆";
        break;
      case "shenqingchengweiVIP":
        title = "厂牌登陆";
        break;
      default:
        title = "迷笛音乐";
        break;
    }

    this.setData({
      type,
      title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})