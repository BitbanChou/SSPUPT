// pages/homepage/homepage.js
var app = getApp()
const db = wx.cloud.database()
const usf = db.collection("userinfo")
const vc = db.collection('visitorcount')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuno:'',
    teamid:0,
    ifopen:false,
    ifinvite:true,
    count:0,
    ifleader:false,
    leaderno:'',
    ifshow:false,
    hasmes:0,
    hast:0,
    hastime:0,
    inff:"公告栏",
    sinff:"",
    schinff:"",
    userInfo:{
      avatarUrl:"",//用户头像
      nickName:"",//用户昵称
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    // setTimeout(function(){
    //   self.setData({
    //     ifshow:true
    //   })
    // },300)
   
    self.setData({
      stuno:app.globalData.stuno
    })
    vc.get().then(res=>{
      console.log(res)
      this.setData({
        hasmes:res.data[4].hplan,
        inff:res.data[4].hptitle,
        sinff:res.data[4].hpst,
        hast:res.data[4].hpse,
        hastime:res.data[4].hptime,
        schinff:res.data[4].hpsche
      })
      console.log(self.data.hasmes)
    })
    
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res);
    //     var avatarUrl = 'userInfo.avatarUrl';
    //     var nickName = 'userInfo.nickName';
    //     self.setData({
    //       [avatarUrl]: res.userInfo.avatarUrl,
    //       [nickName]:res.userInfo.nickName,
    //     })
    //   }
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
    var self = this
    
    
  },
  /**
   * 队伍管理
   */
  teamBtnClick: function(e) {
    var self = this
    wx.navigateTo({
      url: '../team/team',
    })
    // setTimeout(function(){
    //   wx.request({
    //     url: 'https://www.hgyhys.cn/api/teamid',
    //     method: 'POST',
    //     data: { 'stuno': self.data.stuno },
    //     success: function (res) {
    //       self.setData({
    //         teamid: res.data.name
    //       })
    //       if (self.data.teamid == 0) {
    //         wx.navigateTo({
    //           url: '../createteam/createteam',
    //         })
    //         wx.hideLoading()
    //       }
    //       else {
    //         wx.navigateTo({
    //           url: '../team/team',
    //         })
    //         wx.hideLoading()
    //       }
    //     }
    //   })
    // },300)
  },

  /**
   * 邀请队员
   */
  memberBtnClick: function(e){
    var self = this
    wx.navigateTo({
      url: '../invite/invite',
    })
  },

  /**
   * 竞赛日程
   */
  timeBtnClick: function (e) {
    wx.navigateTo({
      url: '../time/time',
    })
  },

  /**
   * 选题系统
   */
  selectBtnClick: function (e) {
    var self = this;
    self.onLoad;
    // wx.showLoading({
    //   title: '加载中..',
    //   mask:true,
    //   duration:1000
    // })
    wx.navigateTo({
      url: '../select/select',
    })
    // wx.request({
    //   url: 'https://www.hgyhys.cn/api/teamid',
    //   method: 'POST',
    //   data: { 'stuno': self.data.stuno },
    //   success: function (res) {
    //     self.setData({
    //       teamid: res.data.name
    //     })
    //     if (self.data.teamid == 0) {
    //       wx.showModal({
    //         title: '提示',
    //         content: '请先加入或组建队伍',
    //         showCancel: false,
    //         success: function (res) {
    //         }
    //       })
    //       wx.hideLoading()
    //     }
    //     else {
    //       setTimeout(function(){
    //         wx.request({
    //           url: 'https://www.hgyhys.cn/api/boolean',
    //           method: 'POST',
    //           data: {},
    //           success: function (res) {
    //             self.setData({
    //               ifopen: res.data
    //             })
    //           }
    //         })
    //       },300)
    //       setTimeout(function (e) {
    //         if (self.data.ifopen == true) {
    //           if (self.data.ifleader == true) {
    //             wx.navigateTo({
    //               url: '../select/select',
    //             })
    //           }
    //           else {
    //             wx.showModal({
    //               title: '提示',
    //               content: '仅队长可参与选题',
    //               showCancel: false,
    //             })
    //           }
    //         }
    //         else {
    //           wx.showModal({
    //             title: '提示',
    //             content: '选题开放时间:\r2019/03/05 21:00-23:00',
    //             showCancel: false,
    //           })
    //         }
    //         wx.hideLoading()
    //       }, 1200)
    //     }
    //   }
    // }) 
  },

  /**
   * 个人信息
   */
  infoBtnClick: function (e) {
    wx.navigateTo({
      url: '../info/info',
    })
  },

  /**
   * 留言板
   */
  messageBtnClick: function (e) {
    wx.navigateTo({
      url: '../message/message',
    })
  },

  enterinviteBtnClick: function(e){
    wx.navigateTo({
      url:'../enterinvite/enterinvite'
    })
  },

  returnBtnClick()
  {
    wx.navigateTo({
      url: '../hello/hello',
    })
  }
})