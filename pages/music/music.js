// pages/musiclist/musiclist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicid: '',
    music: {},
    IP1: 'http://192.168.43.234:3333',
    IP2: 'http://192.168.43.234:3001/',
    src: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var musicid = getApp().requestDetailid;
    this.setData({
      musicid: musicid
    })
    //获取音乐列表
    wx.request({
      url: this.data.IP2 + 'getDetailMusic',
      data: {
        _id: this.data.musicid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData(
          {
            music: res.data
          }
        )
      }
    })
    //创建音乐播放组件
    // const innerAudioContext = wx.createInnerAudioContext();
    // innerAudioContext.autoplay = true;
    // innerAudioContext.src = this.data.music.music.src;
    // innerAudioContext.onPlay(() => {
    //   console.log('开始播放')
    // });
    // innerAudioContext.onError((res) => {
    //   console.log(res.errMsg)
    //   console.log(res.errCode)
    // })
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc(this.data.music.music.src)
    this.audioCtx.play()
  },

  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
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