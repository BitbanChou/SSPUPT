// pages/enterinvite/enterinvite.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuno:'',
    count:0,
    inviteinfo:{},
    name:[],
    teamname:[],
    inviteteamname:'',
    ifadd:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    self.setData({
      stuno: app.globalData.stuno,
      count: app.globalData.invitecount
    })
    wx.request({
      url: 'https://www.hgyhys.cn/api/inviteinfo',
      method: 'POST',
      data: { 'stuno': self.data.stuno },
      success: function (res) {
        self.setData({
          inviteinfo:res.data
        })
      }
    })
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

  },

  yesBtnClick: function(e){
    wx.showLoading({
      title: '检测环境中..',
      mask: true
    })
    var self = this;
    self.setData({
      inviteteamname: e.currentTarget.dataset.id
    })
    wx.request({
      url: 'https://www.hgyhys.cn/api/check_invite',
      method: 'POST',
      data: {
        'teamname': self.data.inviteteamname
      },
      success:function(res){
        self.setData({
          ifadd:res.data
        })
      }
    })
    setTimeout(function(){
      if(self.data.ifadd){
        wx.request({
          url: 'https://www.hgyhys.cn/api/accept_invite',
          method: 'POST',
          data: { 
            'stuno': self.data.stuno,
            'teamname': self.data.inviteteamname 
            },
          success: function (res) {
            wx.showToast({
              title: '接受邀请成功',
              mask:true,
              duration:2000
            })
            setTimeout(function(e){
              wx.navigateBack()
            },1000)
            wx.hideLoading()
          }
        })
      }
      else{
        wx.showModal({
          title: '提示',
          content: '请注意，一支参赛队至多5人，如需有参赛情况变更请咨询齐燕舞老师',
          showCancel:false
        })
        wx.request({
          url: 'https://www.hgyhys.cn/api/refuse_invite',
          method: 'POST',
          data: {
            'stuno': self.data.stuno,
            'teamname': self.data.inviteteamname
          },
          success: function(res){
            wx.hideLoading()
            wx.navigateBack()
          }
        }) 
      }
    },800)
  },

  noBtnClick: function (e) {
    var self = this;
    wx.showLoading({
      title: '环境检测中..',
      mask: true
    })
    self.setData({
      inviteteamname: e.currentTarget.dataset.id
    })
    wx.request({
      url: 'https://www.hgyhys.cn/api/refuse_invite',
      method: 'POST',
      data: {
        'stuno': self.data.stuno,
        'teamname': self.data.inviteteamname
      },
      success: function (res) {
        wx.showToast({
          title: '拒绝邀请',
          mask: true,
          duration: 2000
        })
        setTimeout(function (e) {
          wx.navigateBack()
        }, 1000)
        wx.hideLoading()
      }
    })
  },

  returnBtnClick: function(){
    wx.navigateBack()
  }

})