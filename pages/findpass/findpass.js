// pages/findpass/findpass.js
const db = wx.cloud.database()
const usf = db.collection('userinfo')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[],
    mail:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  formSubmit(e) {
    var that = this
    this.setData({
      info: e.detail.value
    })
    // console.log(this.data.info)
    wx.showLoading({
      title: '加载中..',
      mask: true,
      duration:100,
    })
    console.log(this.data.info.stuno)
    usf.where({
      stuno:this.data.info.stuno
    }).get({
      success:res=>{
        if(res.data[0].password>0)
        {
          console.log("成功找到学生",res.data[0].name,res.data[0].email,res.data[0].password)
          wx.cloud.callFunction({
            name:'sendEmail',
            data:{    //传递
              a:res.data[0].name,
              b:res.data[0].password,
              mail:res.data[0].email
            },
            success(res){
              console.log('发送成功',res)
            },
            fail(res){
              console.log('发送失败',res)
            }
          })
        }
        else{
          wx.showToast({
            title: '该学生未注册',
            icon: 'loading',
            duration:1000,
            mask:true
          })
        }
      },
      fail:res=>{
        console.log("没有找到该学生")
      }
    })
  },

})