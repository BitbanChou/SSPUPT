// pages/info/info.js
// var app = getApp()
var app = getApp()
const db = wx.cloud.database()
const usf = db.collection('userinfo')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curpromblem:"",
    userInfo:{}
  },

  onShow(){
    console.log("成功获取个人信息")
    let personinfo=wx.getStorageSync('info')
    if(personinfo){
      this.setData({
        name:personinfo.name,
        stuno:personinfo.stuno,
        class:personinfo.class,
        sex:personinfo.sex?"男":"女",
        phone:personinfo.connect,
        email:personinfo.email,
        teachername:personinfo.teachername,
        // team:personinfo.team
      })
    }
    usf.where({
        stuno:personinfo.stuno
    }).get({
        success:(res)=>{
          this.setData({
            team:res.data[0].team,
            curpromblem:res.data[0].currentproblem  
          })
          console.log(res.data[0].team)
        }
      })
  },
  returnBtnClick: function(){
    wx.navigateTo({
      url: '../homepage/homepage',
    })
  },
})