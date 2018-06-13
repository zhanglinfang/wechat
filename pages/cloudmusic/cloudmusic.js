// pages/cloudmusic/cloudmusic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IP1: 'http://192.168.43.234:3333',
    IP2: 'http://192.168.43.234:3001/',
    music_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: this.data.IP1 + '/music_list/find', //仅为示例，并非真实的接口地址   
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData(
          {
            music_list: res.data
          }
        )
        // console.log(res.data)
      }
    })
  },
  //获取音乐列表
  musicList: function (e) {
    var id = e.currentTarget.id;

    var app=getApp();
    app.requestDetailid=id;


    wx.navigateTo({
      // url: '../musiclist/musiclist?id='+id
      url: '../musiclist/musiclist'
    });
  } 
 
})