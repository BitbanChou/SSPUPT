var app = getApp()
const db=wx.cloud.database()
const usf=db.collection("userinfo")
const vc=db.collection("visitorcount")
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      stuno:'',
      password:'',
      len:0,
      temp:[]
  },

  stunoInput: function(e){
    this.setData({
      stuno:e.detail.value
    })
  },

  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  registerBtnClick: function () {
    wx.navigateTo({
      url: '../regist/regist',
    })
  },

  forgetBtnClick: function(){
    wx.navigateTo({
      url: '../findpass/findpass',
    })
  },

  loginBtnClick: function (){
    var self = this
    let account = this.data.stuno
    let psw = this.data.password
    console.log("账号",account,"密码",psw)
    usf.where({
      stuno:account
    }).get({
      success(res){
        if(res.data.length==0){
          console.log("获取数据失败",res)
          wx.showToast({
            icon:'none',
            title: '请输入正确的学号',
          })
        }
        else{
          console.log("获取数据成功",res)
          let user = res.data[0].password
          console.log("密码",user)
          if(psw==user)
          {
            console.log("登录成功")
            wx.showToast({
              title: '登录成功',
            })            
            wx.setStorageSync('info',res.data[0])
            wx.navigateTo({
              url: '../homepage/homepage',
            })
            // storageTest()
          }
          else{
            console.log("登录失败")
            wx.showToast({
            icon:'none',
            title: '学号或密码错误',
          })
        }
        }
      },
      fail(res){
        console.log("获取数据失败",res)
        wx.showToast({
          title: '失败，请重试',
        })
      }
    })
  },
  visitBtnClick: function (event) {
    var that = this
    // var id = event.currentTarget.dataset.vcnum;
    // console.log(id)
    // vc.get().then(res=>{
    //   console.log(res.data[0].vcnum)
    //   vc.doc("b00064a760461be008f959e17061cdc2").update({
    //     data:{
    //       vcnum:_.inc(10),
    //     }
    //   })
    // })
    
    wx.navigateTo({
      url: '../visitor/visitor',
    })
  },
  storageSet(){
    wx.setStorageSync("info",{
      name:"lisi",
      age:20,
      time:Date.parse(new Date())/1000
    })
  },
  storageTest(){
    wx.getStorage({  //获取本地缓存
      key: 'test',
      success: function(res) {
        console.log(res)
      },
      fail:(err)=>{//获取缓存失败，一般是本地没有缓存
        //用户第一次在手机上使用，需要预先设置缓存
        this.storageSet()
        console.log(err)
      }
    })
  },
})