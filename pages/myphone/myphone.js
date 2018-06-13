// pages/myphone/myphone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console(res.userInfo)
            }
          })
        }
      }
    })
  },
  cinema:function(){
    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.userLocation']) {
    //       wx.authorize({
    //         scope: 'scope.userLocation',
    //         success() {
    //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           // wx.startUserLocation()
    //           wx.getLocation({
    //             type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //             success: function (res) {
    //               var latitude = res.latitude
    //               var longitude = res.longitude
    //               wx.openLocation({
    //                 latitude: latitude,
    //                 longitude: longitude,
    //                 scale: 28
    //               })
    //             }
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  bindGetUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo
    })
    console.log(e.detail.userInfo)
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