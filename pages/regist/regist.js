// pages/regist/regist.js
const db = wx.cloud.database()
const usf = db.collection('userinfo')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    warning: '',
    teacherset:['请选择授课教师','徐志华','徐成年','吕福和','王玉','占美琼', '贾佑华','高勇','于彬','王胜利',
    '吴中林','齐燕舞','张海娟'],
    key:false,
    info:[],
    items:[{name:'woman',value:'女',checked:true},{name:'man',value:'男'}],
    index:0,
    sex:0,
    temp:false,
    teachername:'',
    team:'',
    currentproblem:'',
    curpid:0,
    iscaptain:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  teachernamechange: function(e) {
    console.log('teacher picker发送选择改变，携带值为', e.detail.value)
    let index = e.detail.value
    let array = this.data.teacherset
    this.setData({
      index,
      default:array[index],
      teachername:array[index]
    })
  },

  formSubmit(e) {
    var that = this
    that.setData({
      info: e.detail.value
    })
    console.log(that.data.info)
    wx.showLoading({
      title: '正在检测中',
    })
    
    if(that.data.info.stuno.length != 11){
      that.setData({
        warning: "学号输入错误",
        key: false
      })
    }
    else if (that.data.info.password.length < 6 || that.data.info.password.length > 12) {
      that.setData({
        warning: "密码为6位至12位",
        key:false
      })
    }
    else if (that.data.info.repassword != that.data.info.password)
      that.setData({
        warning: "密码输入不一致",
        key:false
      })
    else if(that.data.info.name == '' ){
      that.setData({
        warning: "姓名错误",
        key:false
      })
    }
    else if (that.data.info.class == ''){
      that.setData({
        warning: "请输入您的班级",
        key:false
      })
    }
    else if (that.data.info.connect.length != 11){
      that.setData({
        warning: "手机号码输入错误",
        key:false
      })
    }
    else if (that.data.info.email.indexOf("@") == -1){
      that.setData({
        warning: "邮箱输入错误",
        key:false
      })
    }
    else if (that.data.info.email.indexOf(".") == -1) {
      that.setData({
        warning: "邮箱输入错误",
        key: false
      })
    }
    else if(that.data.index == 0){
      that.setData({
        warning: "请选择授课教师",
        key:false,
      })
    }
    else{
      that.setData({
        key:true
      })
      that.data.info.sex === "woman" &&
        that.setData({
          sex:0
        })
      that.data.info.sex === "man" &&
        that.setData({
          sex: 1
        })
    }
    setTimeout(function (e) {
      wx.hideLoading()
    },1000)
    //console.log(that.data.temp)
    console.log(that.data.key)
    usf.where({
      stuno:that.data.info.stuno
    }).get({
      success:(res)=>{
        console.log(res.data.length)
        if(res.data.length>0)
        {
          wx.showToast({
            title: '重复注册',
            image: '../../images/cuo.png',
            duration: 1000
          })
          console.log("重复注册")
        }
        else{
          if(that.data.key==true){
            console.log(that.data.teachername)
            usf.add({
              data: {
                "stuno": that.data.info.stuno,
                "password": that.data.info.password,
                "name": that.data.info.name,
                "sex": that.data.sex,
                "class": that.data.info.class,
                "connect": that.data.info.connect,
                "email": that.data.info.email,
                "teachername": that.data.teachername,
                "team":'',
                "currentproblem":'',
                "curpid":0,
                "captain":'',
                "iscaptain":false,
              },
              success(res) {
                //console.log(res.data)
                wx.showToast({
                  title: '注册成功',
                  duration: 2000
                })
                wx.navigateTo({
                  url: '../hello/hello'
                })
                wx.hideLoading()
              },
              fail(res) {
                wx.showToast({
                  title: '失败，请重试',
                  mask: true,
                  icon: 'loading',
                  duration: 2000
                })
              }
              })     
            }
        }
      }
    })
    // usf.get({
      // success: res => {
        // if(this.stuno==that.data.stuno)
        // {
        //   console.log("重复注册")
        // }
        // else{
        //   if(that.data.key==true){
        //     console.log(that.data.teachername)
        //     usf.add({
        //       data: {
        //         "stuno": that.data.info.stuno,
        //         "password": that.data.info.password,
        //         "name": that.data.info.name,
        //         "sex": that.data.sex,
        //         "class": that.data.info.class,
        //         "connect": that.data.info.connect,
        //         "email": that.data.info.email,
        //         "teachername": that.data.teachername,
        //         "team":'',
        //         "currentproblem":'',
        //         "curpid":0,
        //         "captain":'',
        //         "iscaptain":false,
        //       },
        //       success(res) {
        //         //console.log(res.data)
        //         wx.showToast({
        //           title: '注册成功',
        //           duration: 2000
        //         })
        //         wx.navigateTo({
        //           url: '../hello/hello'
        //         })
        //         wx.hideLoading()
        //       },
        //       fail(res) {
        //         wx.showToast({
        //           title: '失败，请重试',
        //           mask: true,
        //           icon: 'loading',
        //           duration: 2000
        //         })
        //       }
        //       })     
        //     }
        // }
      // }
    // })
  }
})