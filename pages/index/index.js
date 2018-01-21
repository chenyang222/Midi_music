// pages/index.js
const app = getApp();
Page({
  /**
   * 轮播图切换
   */
  swiperChange(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    slider: [{ url: "/images/temp/banner1.png" }, { url: "/images/temp/banner1.png" }, { url: "/images/temp/banner1.png" }],
    swiperCurrent: 0,
    tickData: {
      title: '深圳新年迷笛音乐节',
      time: '2017/12/21-2017/12/30 11:47',
      logo:"/images/temp/ticket_logo.png"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // app.fetch({})
    // .then(function(response){
    //   console.log("成功")
    // })
    // .catch(function(err){
    //   console.log("失败")
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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