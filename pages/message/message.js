// pages/message/message.js
const app = getApp()
const db = wx.cloud.database()
const topicdb = db.collection('topic')
const vc = db.collection('visitorcount')
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    infomation:'',
    topics: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    // topicdb.get().then(res=>{
    //   console.log(res)
    //   this.setData({
    //     topic:res.data
    //   })
    // })
    vc.get().then(res=>{
      console.log(res.data[2].title)
      console.log(res.data[2].infomation)
      this.setData({
        title:res.data[2].title,
        infomation:res.data[2].infomation
      })
    })
  },

  returnBtnClick: function () {
    wx.navigateTo({
      url: '../homepage/homepage',
    })
  },

  onPublishClick: function(event) {
    wx.navigateTo({
      url: "../publish/publish"
    })
  },

  onItemClick: function(event) {
    var that = this
    var id = event.currentTarget.dataset.topicid;
    var openid = event.currentTarget.dataset.openid;
    var tit = event.currentTarget.dataset.title;
    var vc = 0;
    console.log(id);
    console.log(openid);
    console.log(tit);
    // console.log(res)
    topicdb.where({
      title:tit
    }).get({
      success:(res)=>{
        console.log(res.data[0].visit_count)
        vc=res.data[0].visit_count+1
        topicdb.doc(id).update({
          data:{
            visit_count:vc,
          }
        })
      }
    })
   
    wx.navigateTo({
      url: "../single_trends/single_trends?id=" + id + "&openid=" + openid
    })
  },
})