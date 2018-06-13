// pages/musiclist/musiclist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musiclistid: '',
    musicList: [],
    IP1: 'http://192.168.43.234:3333',
    IP2: 'http://192.168.43.234:3001/',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // console.log(this.options.id)
    var musiclistid = getApp().requestDetailid;
    this.setData({
      musiclistid: musiclistid
    })


    //获取音乐列表
    wx.request({
      url: this.data.IP2 + 'getMusicData',
      data: {
        _id: this.data.musiclistid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData(
          {
            musicList: res.data
          }
        )
        console.log(this.data.musicList.music)
      }
    })
  },
  //点击歌曲详情播放
  music:function(e){
    var music_id = e.currentTarget.id;
    var appMusic = getApp();
    appMusic.requestDetailid = music_id;

    wx.navigateTo({
      url: '../music/music'
    });
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