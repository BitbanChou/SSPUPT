// pages/team/team.js
var app = getApp()
const db = wx.cloud.database()
const usf = db.collection('userinfo')
const vc = db.collection('visitorcount')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    stuno:'',
    teamname:'',
    leadername:'',
    stuinfo:{},
    key:0,
    name:['123','Test'],
    class:[],
    connect:[],
    index:0,
    leaderChange:true,
    ifleader:true,
    leaderno:'',
    question:'',
    teamlen:0,
    sstulist:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.showLoading({
      title: '加载中..',
      duration:100,
    })
    let personinfo=wx.getStorageSync('info')
    console.log(personinfo.stuno)
    usf.where({
        stuno:personinfo.stuno
    }).get({
      success:(res)=>{
        this.setData({
          teamname:res.data[0].team,
          teamlen:res.data[0].team.length,
          leadername:res.data[0].captain,
          question:res.data[0].currentproblem
        })
        console.log(this.data.teamname)
        // console.log(res.data[0].team.length)
        if(res.data[0].team.length>0){
          usf.where({
            team:this.data.teamname
          }).get({
            success:(res)=>{
              self.setData({
                sstulist:res.data
              })
              console.log(res.data)
            }
          })
        }
      }
    })
  },

  leadernameChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  changeClick: function(e){
    this.setData({
      leaderChange:!this.data.leaderChange
    })
  },
  yesBtnClick: function(e){
    var self = this;
  },
  cancelBtnClick: function(e){
    this.setData({
      leaderChange : true
    })
  },

  inviteBtnClick: function(e){
    wx.showLoading({
      title: '加载中..',
      mask:true
    })
    setTimeout(function(e){
      wx.navigateTo({
        url: '../invite/invite',
      })
      wx.hideLoading()
    },2000)
  },

  quitBtnClick: function () {
    var self = this
    let personinfo=wx.getStorageSync('info')
    if(personinfo){
    
    wx.showModal({
      title: '提示',
      content: '确定要退出队伍吗？',
      success: function (e) {
        if (e.confirm) {
            wx.setStorageSync(
              'info',{
                _id:personinfo._id,
                _openid:personinfo._openid,
                captain:"",
                class:personinfo.class,
                connect:personinfo.connect,
                curpid:0,
                currentproblem:"",
                email:personinfo.email,
                iscaptain:false,
                name:personinfo.name,
                password:personinfo.password,
                sex:personinfo.sex,
                stuno:personinfo.stuno,
                teachername:personinfo.teachername,
                team:"",
              }
            )
            usf.doc(personinfo._id).update({
              data:{
                team:"",
                currentproblem:"",
                curpid:0,
                iscaptain:false,
                captain:"",
              }
          }),
          wx.showToast({
            title: '成功退出',
            icon: 'success',
            duration: 1500,
            mask: false,
          })
          setTimeout(function () {
            wx.navigateBack({
              url: '../homepage/homepage',
            })
          }, 1500)
          } else if (e.cancel) {
          }
        }
      })
  }
  },
  creatBtnClick:function(){
    wx.navigateTo({
      url: '../createteam/createteam',
    })
  },
  returnBtnClick:function()
  {
    wx.navigateTo({
      url: '../homepage/homepage',
    })
  },
})