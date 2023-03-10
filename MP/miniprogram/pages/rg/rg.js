const db = wx.cloud.database()
const usf=db.collection('userinfo')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    warning:'',
    key:false,
    account:'',
    password:'',
    repassword:''
  },
  getaccount(e){
    console.log("输入的用户名",e.detail.value)
    this.setData({
      account:e.detail.value
    })
  },
  getpsw(e){
    console.log("输入的密码",e.detail.value)
    this.setData({
      password:e.detail.value
    })
  },
  getrepsw(e){
    console.log("输入的确认密码",e.detail.value)
    this.setData({
      repassword:e.detail.value
    })
  },
  submit(e) {
    let ac = this.data.account
    let ps = this.data.password
    let rps = this.data.repassword
    if(ac.length<1){
      wx.showToast({
        title: '用户名不能为空',
        mask:true,
        icon:'none',
        duration:1000
      })
    }
    else if (ps.length < 6 || ps.length > 12) {
      wx.showToast({
        title: '密码为6位至12位',
        mask:true,
        icon:'none',
        duration:1000
      })
      console.log("密码为6位至12位")
    }
    else if(rps!=ps){
      wx.showToast({
        title: '确认密码输入错误',
        mask:true,
        icon:'none',
        duration:1000
      })
    }
    else{
      console.log("信息正确,可以注册")
      usf.add({
        data:{
          "user":ac,
          "password":ps
        }
      })
      console.log("用户注册成功")
    }
  }
})