// pages/countnum/countnum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    arr: [
      { name: 'zhangsan1' },
      { name: 'zhangsan2' },
      { name: 'zhangsan3' },
    ]
    
  },

  //  点击减
  decBtn:function() {
    this.setData(
      {
        count: this.data.count - 1
      }
    )
  },
  //  点击加
  addBtn:function() {
    this.setData(
      {
        count: this.data.count + 1
      }
    )
  },
  onLoad:function(){
   
  }









})