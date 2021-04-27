// pages/createteam/createteam.js
var app = getApp()
const db = wx.cloud.database()
const usf = db.collection('userinfo')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamname:'',
    temp:false,
    stuno:'',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      stuno: app.globalData.stuno
    })
  },
  teamnameInput: function (e) {
    this.setData({
      teamname: e.detail.value
    })
  },
  /**
   * 确认
   */
  createBtnClick: function(){
    var self = this;
    if(self.data.teamname==''){
      wx.showToast({
        title: '请输入队名',
        mask: true,
        icon: 'loading',
        duration: 1000
      })
    }
    else{
      usf.where({
        team:this.data.teamname
      }).get({
          success:(res)=>{
            this.setData({
              list:res.data
            })
            if(this.data.list.length>0)
            {
              console.log("队名已被占用",res.data)
              wx.showToast({
                title: '队名已被占用',
                mask: true,
                image: '../../images/cuo.png',
                duration: 1000
               })
            }
            else{
              // wx.showToast({
              //   title: '创建成功',
              //   duration: 1000
              // })
              let personinfo=wx.getStorageSync('info')
              
              
                  usf.doc(personinfo._id).update({
                    data:{
                      team:this.data.teamname,
                      captain:personinfo.name,
                      iscaptain:true,
                    }
                }).then(res=>{
                  wx.setStorageSync(
                    'info',{
                      _id:personinfo._id,
                      _openid:personinfo._openid,
                      captain:personinfo.name,
                      class:personinfo.class,
                      connect:personinfo.connect,
                      curpid:0,
                      currentproblem:"",
                      email:personinfo.email,
                      iscaptain:true,
                      name:personinfo.name,
                      password:personinfo.password,
                      sex:personinfo.sex,
                      stuno:personinfo.stuno,
                      teachername:personinfo.teachername,
                      team:this.data.teamname,
                    }
                  )
                  console.log(personinfo.stuno)
                  console.log("创建成功",this.data.teamname)
                  setTimeout(function () {
                    wx.navigateBack({
                      url: '../homepage/homepage',
                    })
                  }, 1500)
                })
              
            }
          },
          fail:(err)=>{
            wx.showToast({
              title: '创建失败',
              mask: true,
              icon: 'loading',
              duration: 1500
             })
          }
      })
    }
  },
  /**
   * 返回
   */
  returnBtnClick: function(){
    wx.navigateTo({
      url: '../homepage/homepage',
    })
  }
})